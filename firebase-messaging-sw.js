importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
importScripts('firebase-config.js');
firebase.initializeApp(self.FB.config);
firebase.messaging(); // يعرض الإشعار تلقائياً لما الصفحة مقفلة
