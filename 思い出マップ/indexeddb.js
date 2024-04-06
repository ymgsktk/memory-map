//edit.htmlにおいて画像をindexeddbに保存する機能を持つファイル
document.addEventListener("DOMContentLoaded", function() {
  openDBAndSaveImage();
});

function openDBAndSaveImage() {
  const DB_NAME = "imageDB";
  const STORE_NAME = "images";

  const request = indexedDB.open(DB_NAME, 1);

  request.onerror = function(event) {
    console.error("Database error: " + event.target.errorCode);
  };

  request.onsuccess = function(event) {
    console.log("Database opened successfully");
    const db = event.target.result;
    displayImages(db); // 保存された画像を表示
  };

  request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
  };
}

// 画像を保存する関数
function saveImage() {
  const dbRequest = indexedDB.open("imageDB");
  dbRequest.onsuccess = function(event) {
    const db = dbRequest.result;
    const fileInput = document.getElementById("inputfile");
    const file = fileInput.files[0];
    
    if (file) {
      // ファイルを読み込む
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageData = e.target.result;
        // Base64エンコードされた画像データをBlobに変換
        const blob = dataURItoBlob(imageData);
        addImage(db, blob); // 画像を追加して表示を更新
        fileInput.value = ''; // フォームをクリアする
      };
      reader.readAsDataURL(file);
    }
  };
}


// 画像をデータベースに追加する関数
function addImage(db, blob) {
  const DB_NAME = "imageDB";
  const STORE_NAME = "images";
  const transaction = db.transaction([STORE_NAME], "readwrite");
  const objectStore = transaction.objectStore(STORE_NAME);

  // データを作成
  const data = { image: blob };

  // オブジェクトストアにデータを追加
  const request = objectStore.add(data);

  request.onsuccess = function(event) {
    console.log("Image added to the database");
    window.location.href='memory.html'
   // displayImages(db); // 画像を表示する
  };

  request.onerror = function(event) {
    alert("Error adding image to the database: " + event.target.errorCode);
  };
}

// 保存された画像を表示する関数（IndexedDB データベースを開いた後に呼び出される）
function displayImages(db) {
  var count = 0;
  const STORE_NAME = "images";
  const objectStore = db.transaction(STORE_NAME).objectStore(STORE_NAME);
  const imageContainer = document.getElementById('imageContainer');
      imageContainer.innerHTML = '';

  objectStore.openCursor().onsuccess = function(event) {
    const cursor = event.target.result;
    
    if (cursor) {
      let keys = 'parent2'
      let i = 2
      if(count<4){
        let imageData = cursor.value.image;
      let parent_ele = document.getElementsByClassName('parent');
      let parentDiv = document.createElement('div');
      parentDiv.className = keys;
      const imageDiv = document.createElement('div');
      imageDiv.className = 'image';
      const pictureDiv = document.createElement('div');
      pictureDiv.className = 'picture';
      const imageElement = document.createElement('img');
      imageElement.src = URL.createObjectURL(imageData); // Blob URL を使用して画像を表示
      imageElement.onclick = function() {
        // 画像をクリックした時の処理（画像の削除）
        if (confirm("画像を削除しますか？")) {
          alert(cursor.key)
          deleteImage(cursor.key,db); // 画像を削除して表示を更新
        }
      };
      if(count===3){
        let br = document.createElement('br')
        parent_ele[0].after(br)
        br.after(parentDiv);
      }
        parent_ele[0].appendChild(imageDiv)
        imageDiv.appendChild(pictureDiv)
        pictureDiv.appendChild(imageElement);
        count++;
  
      cursor.continue();
      }else if(count<8){
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
        imageElement.onclick = function() {
          // 画像をクリックした時の処理（画像の削除）
          if (confirm("画像を削除しますか？")) {
            alert(cursor.key)
            deleteImage(cursor.key,db); // 画像を削除して表示を更新
          }
        };
        if(count===7){
          let br = document.createElement('br')
          parent_ele[0].after(br)
          br.after(parentDiv);
          i++;
          //alert(i)
        }
          parent_ele[0].appendChild(imageDiv)
          imageDiv.appendChild(pictureDiv)
          pictureDiv.appendChild(imageElement);
          count++;
        cursor.continue();
      }else if(count<12){
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
        imageElement.onclick = function() {
          // 画像をクリックした時の処理（画像の削除）
          if (confirm("画像を削除しますか？")) {
            alert(cursor.key)
            deleteImage(cursor.key,db); // 画像を削除して表示を更新
          }
        };
        if(count===11){
          let br = document.createElement('br')
          parent_ele[0].after(br)
          br.after(parentDiv);
        }
          parent_ele[0].appendChild(imageDiv)
          imageDiv.appendChild(pictureDiv)
          pictureDiv.appendChild(imageElement);
          count++;
        cursor.continue();
      }


/*
      if(count%4 === 0 && count != 0){
        let br = document.createElement('br');
        parent_ele.appendChild(br);
        let br_class = document.createElement('div');
        br_class.className = 'card'
        parent_ele.appendChild(br_class);
      }
      parent_ele.appendChild(imageDiv);
      imageDiv.appendChild(pictureDiv)
      pictureDiv.appendChild(imageElement);
      
     // parent.appendChild(imageDiv);
      count++ 
      cursor.continue();*/
    }
  };
}

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