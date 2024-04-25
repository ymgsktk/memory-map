document.addEventListener("DOMContentLoaded", function() {
  openDBAndSaveImage();
});

function openDBAndSaveImage() {
  let prebox = ""
  var array = JSON.parse(localStorage.getItem("myArray3"))
                for (var k in array){
                    if(array[k]==true){
                      prebox=k   //preboxでユーザが今訪問してる県のページのキーを取得               
                    }
                  }
  let DB_NAME = prebox;
  let STORE_NAME = "images";

  let request = indexedDB.open(DB_NAME, 1);

  request.onerror = function(event) {
    console.error("Database error: " + event.target.errorCode);
  };

  request.onupgradeneeded = function(event) {
    let db = event.target.result;
    let objectStore = db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
    console.log("Object store created: " + STORE_NAME);
  };

  request.onsuccess = function(event) {
    console.log("Database opened successfully");
    let db = event.target.result;
    displayImages(db, STORE_NAME); // 保存された画像を表示
  };
}

// 画像を保存する関数
function saveImage() {
  let prebox = ""
  var array = JSON.parse(localStorage.getItem("myArray3"))
                for (var k in array){
                    if(array[k]==true){
                      prebox=k   //preboxでユーザが今訪問してる県のページのキーを取得               
                    }
                  }
  //まず日付やメモ、画像があるかどうか確認
  const visit_count = document.getElementById('count')
  const check_str = document.getElementById('memo')
  const check_date = document.getElementById('date')
  const error_str = document.getElementById('errordate')
  const error_date = document.getElementById('errormemo')
  let visit = visit_count.value
  const visitCountElement = document.getElementById('visit-count');
        visitCountElement.textContent = visit;
        

  if(check_date.value == ""|| check_str.value == ""){
    error_date.textContent = '※入力必須項目です'
    return
  }
  //ここから画像の保存
  const dbRequest = indexedDB.open(prebox);
  dbRequest.onsuccess = function(event) {
    const db = dbRequest.result;
    const fileInput = document.getElementById("inputfile");
    const file = fileInput.files[0];
    const stringsInput = document.getElementById("memo")
    const strings = stringsInput.value
    const dateInput = document.getElementById('date')
    const date = dateInput.value
    if (file) {
      // ファイルを読み込む
      
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageData = e.target.result;
        // Base64エンコードされた画像データをBlobに変換
        const blob = dataURItoBlob(imageData);
        addImage(db, blob,strings, date); // 画像を追加して表示を更新
        fileInput.value = ''; // フォームをクリアする
      };
      reader.readAsDataURL(file);
    }



  };
}
// 画像をデータベースに追加する関数
function addImage(db, blob,strings,date) {
  let STORE_NAME = "images";
  const transaction = db.transaction([STORE_NAME], "readwrite");
  const objectStore = transaction.objectStore(STORE_NAME);

  // データを作成
  const data = { image: blob ,STRINGS : strings, DATE : date};

  // オブジェクトストアにデータを追加
  const request = objectStore.add(data);

  request.onsuccess = function(event) {
    console.log("Image added to the database");
    location.reload();
   // displayImages(db); // 画像を表示する
  };

  request.onerror = function(event) {
    alert("Error adding image to the database: " + event.target.errorCode);
  };
}

// 保存された画像を表示する関数（memory.htmlを開いた後に呼び出される）
function displayImages(db, STORE_NAME) {
  var count = 0;
  const objectStore_image = db.transaction(STORE_NAME).objectStore(STORE_NAME);
  //const imageContainer = document.getElementById('imageContainer');
   //   imageContainer.innerHTML = '';

  objectStore_image.openCursor().onsuccess= function(event) {
    const cursor = event.target.result;
    
    if (cursor) {
      if(count<4){
        
        let dateData = cursor.value.DATE
        let strData = cursor.value.STRINGS;
        let imageData = cursor.value.image;
        let parent_ele = document.getElementsByClassName('parent');
        let parentDiv = document.createElement('div');
        parentDiv.className = 'parent2';
        const imageDiv = document.createElement('div');
        imageDiv.className = 'image';
        const pictureDiv = document.createElement('div');
        pictureDiv.className = 'picture';
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(imageData); // Blob URL を使用して画像を表示
        imageElement.setAttribute('data-key', cursor.key);

        const desDiv = document.createElement('div');
        desDiv.className = 'date_des';
        const dateElement = document.createElement('p');
        dateElement.className = 'date'
        dateElement.textContent = dateData
        const desElement = document.createElement('p');
        desElement.className = 'des'
        desElement.textContent = strData

        imageElement.onclick = function(events) {
        // 画像をクリックした時の処理（画像の削除）
        if (confirm("画像を削除しますか？")) {
          const key = this.getAttribute('data-key'); // data-key 属性から key を取得
          // IndexedDB からオブジェクトを削除する処理
          const transaction = db.transaction(["images"], "readwrite");
          const objectStore = transaction.objectStore("images");
          const request = objectStore.delete(Number(key)); // key を数値に変換して渡す
          location.reload(); 
        }
        }

        if(count===3){
          let br = document.createElement('br')
          parent_ele[0].after(br)
          br.after(parentDiv);
        }
        parent_ele[0].appendChild(imageDiv)
        imageDiv.appendChild(pictureDiv)
        pictureDiv.appendChild(imageElement);
        pictureDiv.appendChild(desDiv)
        desDiv.appendChild(dateElement)
        desDiv.appendChild(desElement)
        count++;
        cursor.continue();

      }else if(count<8){
        let dateData = cursor.value.DATE
        let strData = cursor.value.STRINGS;
        let imageData = cursor.value.image;
        let parent_ele = document.getElementsByClassName('parent2');
        let parentDiv = document.createElement('div');
        parentDiv.className = 'parent3';
        const imageDiv = document.createElement('div');
        imageDiv.className = 'image';
        const pictureDiv = document.createElement('div');
        pictureDiv.className = 'picture';
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(imageData); // Blob URL を使用して画像を表示
        imageElement.setAttribute('data-key', cursor.key);

        const desDiv = document.createElement('div');
        desDiv.className = 'date_des';
        const dateElement = document.createElement('p');
        dateElement.className = 'date'
        dateElement.textContent = dateData
        const desElement = document.createElement('p');
        desElement.className = 'des'
        desElement.textContent = strData

        imageElement.onclick = function(events) {
          // 画像をクリックした時の処理（画像の削除）
          if (confirm("画像を削除しますか？")) {
            const key = this.getAttribute('data-key'); // data-key 属性から key を取得
 
            // IndexedDB からオブジェクトを削除する処理
            const transaction = db.transaction(["images"], "readwrite");
            const objectStore = transaction.objectStore("images");
            const request = objectStore.delete(Number(key)); // key を数値に変換して渡す
            location.reload(); 
          }
          }
        if(count===7){
          let br = document.createElement('br')
          parent_ele[0].after(br)
          br.after(parentDiv);
        }
        parent_ele[0].appendChild(imageDiv)
        imageDiv.appendChild(pictureDiv)
        pictureDiv.appendChild(imageElement);
        pictureDiv.appendChild(desDiv)
        desDiv.appendChild(dateElement)
        desDiv.appendChild(desElement)
        count++;
        cursor.continue();
      }else if(count<12){
        let dateData = cursor.value.DATE
        let strData = cursor.value.STRINGS;
        let imageData = cursor.value.image;
        let parent_ele = document.getElementsByClassName('parent3');
        let parentDiv = document.createElement('div');
        parentDiv.className = 'parent4';
        const imageDiv = document.createElement('div');
        imageDiv.className = 'image';
        const pictureDiv = document.createElement('div');
        pictureDiv.className = 'picture';
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(imageData); // Blob URL を使用して画像を表示
        imageElement.setAttribute('data-key', cursor.key);

        const desDiv = document.createElement('div');
        desDiv.className = 'date_des';
        const dateElement = document.createElement('p');
        dateElement.className = 'date'
        dateElement.textContent = dateData
        const desElement = document.createElement('p');
        desElement.className = 'des'
        desElement.textContent = strData

        imageElement.onclick = function(events) {
          // 画像をクリックした時の処理（画像の削除）
          if (confirm("画像を削除しますか？")) {
            const key = this.getAttribute('data-key'); // data-key 属性から key を取得

            // IndexedDB からオブジェクトを削除する処理
            const transaction = db.transaction(["images"], "readwrite");
            const objectStore = transaction.objectStore("images");
            const request = objectStore.delete(Number(key)); // key を数値に変換して渡す
            location.reload(); 
          }
          }
        if(count===11){
          let br = document.createElement('br')
          parent_ele[0].after(br)
          br.after(parentDiv);
        }
        parent_ele[0].appendChild(imageDiv)
        imageDiv.appendChild(pictureDiv)
        pictureDiv.appendChild(imageElement);
        pictureDiv.appendChild(desDiv)
        desDiv.appendChild(dateElement)
        desDiv.appendChild(desElement)
        count++;
        cursor.continue();
      }
    }
  }
};



// Data URIをBlobに変換する関数
function dataURItoBlob(dataURI) {
  // Base64エンコードされたデータ部分のみを取得
  const base64Index = dataURI.indexOf('base64,') + 'base64,'.length;
  const base64 = dataURI.substring(base64Index);

  // Base64データをバイナリデータに変換
  const binary = atob(base64);

  // バイナリデータをUint8Arrayに変換
  const byteArray = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    byteArray[i] = binary.charCodeAt(i);
  }

  // Uint8ArrayをBlobに変換
  return new Blob([byteArray], { type: 'image/jpeg' }); // ここで画像のMIMEタイプを適切なものに置き換える必要があります
}

// 画像を削除する関数
function deleteImage(key,db) {
  const transaction = db.transaction(["images"], "readwrite");
  const objectStore = transaction.objectStore("images");
  const request = objectStore.delete(key);
  request.onsuccess = function(event) {
    console.log("Image deleted from the database");
    displayImages(db); // 画像を表示する
  };
  request.onerror = function(event) {
    console.error("Error deleting image from the database: " + event.target.errorCode);
  };
}