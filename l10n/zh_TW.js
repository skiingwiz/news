OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "請求失敗，網路連線不可用！",
    "Request unauthorized. Are you logged in?" : "請求未經授權。您登入了嗎？",
    "Request forbidden. Are you an admin?" : "請求被禁止。您是管理員嗎？",
    "Token expired or app not enabled! Reload the page!" : "權杖已過期或應用程式未啟用！請重新載入頁面！",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "內部伺服器錯誤！請檢查您的 data/nextcloud.log 檔案以取得額外資訊！",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "請求失敗，Nextcloud 目前正處於維護模式！",
    "News folders" : "新聞資料夾",
    "News" : "新聞",
    "An RSS/Atom feed reader" : "RSS/Atom feed 閱讀程式",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "新聞應用程式是供 Nextcloud 使用的 RSS/Atom feed 閱讀程式，可與許多行動裝置同步。所有客戶端列表與需求都可以[在 README](https://github.com/nextcloud/news) 中找到。\n\n在您更新到新版前，[請檢查變動紀錄](https://github.com/nextcloud/news/blob/master/CHANGELOG.md)以避免意外。\n\n**重要**：要啟用 feed 更新，您必須啟用 [Nextcloud 系統 cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) 或使用[更新程式](https://github.com/nextcloud/news-updater)以使用內建的更新 API 並停用 cron 更新。更多資訊可[在 README](https://github.com/nextcloud/news) 中找到。",
    "Use system cron for updates" : "使用系統 cron 來更新",
    "Disable this if you run a custom updater such as the Python updater included in the app." : "如果您執行了自訂的應用程式，如包含在應用程式中的 Python 更新程式，請停用這個。",
    "Purge interval" : "清理間隔",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored." : "從資料庫中移除已刪除的 feed 與資料夾後的最小秒數；低於60秒的值將會被忽略。",
    "Maximum read count per feed" : "每個 feed 的最大閱讀次數",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off." : "定義每個 feed 可以讀取的最大文章數，清理作業不會刪除這些文章；如果舊文章在閱讀後又重新出現，請增加此值；負值，如 -1 將會把這個功能關閉。",
    "Maximum redirects" : "最大重新導向",
    "How many redirects the feed fetcher should follow." : "Feed 擷取程式應遵循多少重新導向。",
    "Feed fetcher timeout" : "Feed 擷取程式逾時",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted." : "等待 RSS 或 Atom feed 載入的最大秒數；如果花了更長的時間，更新將會被中止。",
    "Explore Service URL" : "探索服務 URL",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty." : "若提供，將使用此服務的 URL 進行查詢以在探索 feed 區塊中顯示 feed。要汰退至內建的探索服務，請將此輸入留空。",
    "For more information check the wiki." : "要取得更多資訊，請看 wiki。",
    "Update interval" : "更新間隔",
    "Interval in seconds in which the feeds will be updated." : "Feed 更新的時間間隔（以秒為單位）。",
    "Saved" : "已儲存",
    "Download" : "下載",
    "Close" : " 關閉",
    "Subscribe to" : "訂閱",
    "No articles available" : "沒有文章",
    "No unread articles available" : "沒有未讀文章",
    "Open website" : "開啟網站",
    "Star article" : "加上星號",
    "Unstar article" : "移除星號",
    "Keep article unread" : "維持未讀狀態",
    "Remove keep article unread" : "停止維持未讀狀態",
    "by" : "由",
    "from" : "從",
    "Play audio" : "播放音訊",
    "Download audio" : "下載音訊",
    "Download video" : "下載影片",
    "Keyboard shortcut" : "快速鍵",
    "Description" : "描述",
    "right" : "右邊",
    "Jump to next article" : "跳到下篇文章",
    "left" : "左邊",
    "Jump to previous article" : "跳到上篇文章",
    "Toggle star article" : "切換文章星號",
    "Star article and jump to next one" : "加上星號並跳到下一篇",
    "Toggle keep current article unread" : "切換維持目前文章未讀",
    "Open article in new tab" : "在新分頁開啟文章",
    "Toggle expand article in compact view" : "切換是否在精簡模式中展開文章",
    "Refresh" : "重新整理",
    "Load next feed" : "載入下個饋流",
    "Load previous feed" : "載入上個饋流",
    "Load next folder" : "載入下個資料夾",
    "Load previous folder" : "載入上個資料夾",
    "Scroll to active navigation entry" : "捲動至使用中的導覽項",
    "Focus search field" : "進入搜尋框",
    "Mark current article's feed/folder read" : "將目前文章所在的 feed 或資料夾標為已讀",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "偵測到 Ajax 或 webcron！您的 feed 將無法更新！",
    "How to set up the operating system cron" : "如何設定作業系統 cron",
    "Install and set up a faster parallel updater that uses the News app's update API" : "安裝並設定新聞應用程式的更新 API 的較快平行更新程式",
    "Subscribe" : "訂閱",
    "Web address" : "網址",
    "Feed exists already!" : "Feed 已存在！",
    "Folder" : "資料夾",
    "No folder" : "無資料夾",
    "New folder" : "新資料夾",
    "Folder name" : "資料夾名稱",
    "Go back" : "返回",
    "Folder exists already!" : "資料夾已經存在！",
    "Credentials" : "憑證",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "HTTP 基本身份驗證必須未加密儲存！每個可以存取伺服緝獲資料庫的人都將可以存取它們！",
    "Username" : "使用者名稱",
    "Password" : "密碼",
    "Autodiscover Feed" : "自動探索 Feed",
    "New Folder" : "新資料夾",
    "Create" : "建立",
    "Explore" : "探索",
    "Update failed more than 50 times" : "更新失敗超過 50 次",
    "Deleted feed" : "刪除 feed",
    "Undo delete feed" : "取消刪除 feed",
    "Rename" : "重新命名",
    "Menu" : "選單",
    "Mark read" : "標為已讀",
    "Unpin from top" : "取消置頂",
    "Pin to top" : "置頂",
    "Newest first" : "最新的放最前面",
    "Oldest first" : "最舊的放最前面",
    "Default order" : "預設順序",
    "Enable full text" : "啟用全文",
    "Disable full text" : "停用全文",
    "Unread updated" : "已更新未讀",
    "Ignore updated" : "忽略更新",
    "Open feed URL" : "開啟 feed URL",
    "Delete" : "刪除",
    "Dismiss" : "取消",
    "Collapse" : "收合",
    "Deleted folder" : "已刪除的資料夾",
    "Undo delete folder" : "取消刪除資料夾",
    "Starred" : "星號",
    "Unread articles" : "未讀文章",
    "All articles" : "所有文章",
    "Settings" : "設定",
    "Disable mark read through scrolling" : "停用捲動時標記已讀",
    "Compact view" : "簡潔檢視",
    "Expand articles on key navigation" : "按鍵導航展開文章",
    "Show all articles" : "顯示全部文章",
    "Reverse ordering (oldest on top)" : "反向排序（最舊的文章排在最上面）",
    "Subscriptions (OPML)" : "訂閱 (OPML)",
    "Import" : "匯入",
    "Export" : "匯出",
    "Error when importing: File does not contain valid OPML" : "匯入時發生錯誤：檔案不包含有效的 OPML",
    "Error when importing: OPML is does neither contain feeds nor folders" : "匯入時發生錯誤：OPML 既不包含 feed 也不包含資料夾",
    "Unread/Starred Articles" : "未讀／已加星號文章",
    "Error when importing: file does not contain valid JSON" : "匯入時發生錯誤：檔案並不包含有效的 JSON",
    "Help" : "說明",
    "Keyboard shortcuts" : "鍵盤快捷鍵",
    "Documentation" : "說明文件",
    "Report a bug" : "回報問題"
},
"nplurals=1; plural=0;");
