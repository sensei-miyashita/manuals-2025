function showContent(contentId) {
    // すべてのコンテンツセクションを非表示にする
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });

    // すべてのメニューアイテムから active クラスを削除
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });

    // 選択されたコンテンツを表示
    document.getElementById(contentId).classList.add('active');

    // 対応するメニューアイテムに active クラスを追加
    const activeLink = document.querySelector(`a[href="#${contentId}"]`);
    if (activeLink) {
        activeLink.parentElement.classList.add('active');
    }

    // モバイルメニューを閉じる
    closeMobileMenu();

    // スクロールリセットを少し遅延して実行
    setTimeout(() => {
        window.scrollTo(0, 0);
        const contentArea = document.querySelector('.content');
        if (contentArea) {
            contentArea.scrollTop = 0;
        }
        // bodyのスクロールもリセット
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, 10);
}

function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobileOverlay');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    toggle.classList.toggle('active');
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobileOverlay');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    toggle.classList.remove('active');
}