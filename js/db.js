let req = window.indexedDB.open('pwadb', 1)

req.onupgradeneeded = (e) => {
    console.log("Db updated");
    let db = e.target.result;

    db.createObjectStore('users', {
        keyPath: 'id'
    });
};

req.onerror = (e) => {
    console.log("Db - error ", e.target.error);
};

req.onsuccess = (e) => {
    let db = e.target.result;

    let transaction = db.transaction('users', 'readwrite');

    transaction.onerror = (e) => {
        console.log('TR -Error ->', e.target.error);
    };

    transaction.oncomplete = (e) => {
        console.log('TR - Done', e);
    };

    let stored = transaction.objectStore('users');
    stored.add({
        id: new Date().toISOString(),
        username: "carlo♥",
        fullname: "carmona♥"

    });
    stored.onsuccess = (e) => {
        console.log('ST-Succes->', 'SeAGREGO');
    }

}