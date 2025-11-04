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