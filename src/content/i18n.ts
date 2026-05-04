export type Locale = 'zh' | 'en';

export const ui = {
  zh: {
    nav: {
      features: '核心',
      iphone: 'iPhone',
      ipad: 'iPad',
      mac: 'Mac',
      vision: 'Vision Pro',
      download: '下载',
    },
    hero: {
      eyebrow: '忆境空间 · YJing',
      title: '一个 App，四端通用',
      subtitle: '在每一个 Apple 设备上，遇见你的记忆。',
      cta_primary: '在 App Store 下载',
      cta_secondary: '了解全部功能',
    },
    pillars: {
      heading: '四件事，让 YJing 不一样',
      one_app: {
        title: 'One App. Four Platforms.',
        body: '一份订阅，iPhone / iPad / Mac / Vision Pro 四端通用。Apple Universal Purchase，付费一次即可登录全部 Apple 设备。',
      },
      reel: {
        title: '沉浸滚动播放',
        body: '照片与视频 60fps 无缝串流，CADisplayLink + CALayer 双份 tile 平铺无限滚动。竖向横向自由切换，单击暂停、双击退出，把文件夹变成你的私人放映厅。',
      },
      privacy: {
        title: '隐私优先',
        body: 'PIN / 手势 / Face ID / Touch ID 多重锁，文件夹级细粒度细化。隐藏文件、自动隐藏、本地优先存储 —— 所有数据留在你的设备上，从不联网。',
      },
      space: {
        title: '空间记忆',
        body: '在 Vision Pro 把照片墙带入真实空间。视线焦点触发视频播放，ARKit 锚定，照片墙在房间里稳定存在 —— 走进去，看你的回忆。',
      },
    },
    reel_showcase: {
      eyebrow: '明星功能 · 横跨四端',
      title: '轻点 Play，照片与视频接连而至',
      body: 'YJing 把文件夹变成连续的视觉流。CADisplayLink 驱动 60fps 滚动，CALayer 双份 tile 平铺实现无限循环，视频播完一次自动接下一帧 —— 从 iPhone 的飞行启动动画，到 Mac 的双份 tile 平铺，再到 Vision Pro 的视线焦点触发，四端共享同一份纯函数布局核心。',
      bullets: [
        '60fps 无卡顿滚动，6000+ 项目稳定',
        '竖向 / 横向自由切换',
        '单击暂停、双击退出、锁屏即时回收',
        '视频静音切换、循环播放、动态滚动速度',
      ],
    },
    iphone: {
      eyebrow: 'iPhone',
      title: '装进口袋的私人媒体库',
      body: '瀑布流预览、多重解锁、WiFi 文件传输、摇一摇手势 —— iPhone 端最克制的隐私媒体管理器。',
      features: [
        { title: '瀑布流预览', body: '4 档视图模式：瀑布预览、行齐、等大网格、列表。拖拽排序、批量选择。' },
        { title: '多重解锁', body: 'PIN（4-6 位）、九宫格手势、Face ID 任意组合。失败梯度冷却 30s→15min，凭据 SHA256 + 16 字节 salt 存 Keychain。' },
        { title: 'WiFi 文件传输', body: '同 WiFi 浏览器访问，一次性 4 位 PIN 即可管理 Documents。本机 GCDWebServer，不走外网。' },
        { title: '摇一摇手势', body: '三档灵敏度可调，多峰边沿检测算法天然区分"摇一摇"与"放桌冲击"。可触发隐藏切换或播放控制。' },
        { title: '9 语言本地化', body: '简中、繁中、英、日、韩、德、法、西、俄。应用内即时切换，日期格式跟随语言。' },
      ],
    },
    ipad: {
      eyebrow: 'iPad',
      title: '大屏沉浸 · 横屏全开',
      body: 'iPad 上同一份 App，体验放大到适配 iPad multitasking 与 NavigationSplitView 的全屏视野。',
      features: [
        { title: '横屏滚动播放', body: '把 iPad 当作私人放映台，一根手指无限上滑，照片与视频自动接力。' },
        { title: '大屏 Split View', body: 'NavigationSplitView 适配 iPad，多任务分屏与外接键盘鼠标都可顺畅使用。' },
        { title: 'Apple Pencil 友好', body: '拖拽排序、批量选择、长按菜单，所有触摸交互在 iPad 大屏上更舒展。' },
      ],
    },
    mac: {
      eyebrow: 'Mac',
      title: '专业级图片视频中心',
      body: '原生 macOS 26 SwiftUI App。NavigationSplitView 三栏架构、Inspector 面板、暖光主题、CALayer 渲染的窗口化 Masonry —— 把 Finder 升级成媒体专业工作台。',
      features: [
        { title: 'Marquee 空白拖框选', body: '任意空白处按住拖拽即可画选区。⌘ toggle / ⇧ additive / 覆盖三种语义对齐 Finder。6000+ 项目 O(1+N/cols) 列桶预筛。' },
        { title: 'Inspector 检查器', body: '⌘I 切换右侧面板：文件元信息、多选总大小、4 桶分类（folders / photos / videos / others）+ 缩略图预览。' },
        { title: '悬停视频预览', body: '光标悬停 300ms 即原位静音循环播放。整 App 单例 AVPlayer，6 闸纯函数门控（窗口焦点 / 拖拽中 / 滚动中 全部通过才触发）。' },
        { title: '图片旋转 + 缩放', body: 'JPEG / HEIC / TIFF 改 EXIF orientation，PNG 像素重写。原子写入 + 失败回滚。滚轮 / 触控板 1.0~8.0× 围绕鼠标位置缩放。' },
        { title: '暖光主题', body: '明暗双套琥珀色卡（30+ token）。ambient 壁纸 = linear gradient + 主辅 radial。一键切换主题，工具栏图标跟随显示月亮/太阳。' },
        { title: 'Touch ID 解锁', body: '双 PIN（App + 文件夹）+ Touch ID。三态锁（locked / sessionUnlocked / unlocked），硬锁持久化。失败梯度冷却独立计数器。' },
      ],
      hero_feature: {
        title: '系统级图片视频查看器',
        subtitle: 'Finder「打开方式 → 忆境空间」',
        body: 'YJing 不只是一个 App，更是一个媒体查看器。把图片或视频文件类型的默认打开方式设为忆境空间，双击 Finder 文件即用 YJing 内置预览器打开 —— 自动 sibling expand 同目录翻页（左右方向键），等同于 Preview / QuickLook 升级版。即使不进入文件夹浏览模式，单文件预览也可独立运行。',
      },
    },
    vision: {
      eyebrow: 'Vision Pro',
      title: '走进你的记忆',
      body: '把相册搬进 Apple Vision Pro 的空间里。可走动、可缩放、可触发播放的 3D 照片墙，让记忆不再只是手机相册里一格一格的缩略图。',
      features: [
        { title: '空间照片墙', body: '导入相册照片视频，自动排列成可在沉浸空间里漫游的 3D 照片墙。墙在真实空间中保持 ARKit 稳定锚点。' },
        { title: '视线焦点播放', body: '墙上的视频跟随你的视线焦点播放。中心播放、循环、动态滚动速度，让视频成为空间的呼吸。' },
        { title: '空间缩放', body: '单张照片或视频可放大到面前细看，缩放过程平滑可逆。两手捏合即可调整距离与大小。' },
        { title: 'visionOS 原生', body: 'visionOS 2.2+ 原生 App，SwiftUI + RealityKit + ARKit。自研 ConcurrencyLimiter / AsyncSemaphore 控制媒体加载并发。' },
      ],
    },
    universal: {
      eyebrow: '一个 App. 全部 Apple 设备.',
      title: 'One App. Every Apple Device.',
      body: '通过 Apple Universal Purchase，你支付一次即可在 iPhone、iPad、Mac、Vision Pro 上登录使用同一份忆境空间。设置、订阅、解锁状态在 iCloud 中保持一致。',
      requirements: 'iOS 26 · iPadOS 26 · macOS 26 · visionOS 2.2',
    },
    cta: {
      title: '准备好把记忆装进每一台 Apple 设备？',
      body: '在 App Store 搜索「忆境空间」或直接点击下方下载。',
      app_store_alt: '在 App Store 下载',
      vision_link: '查看 Vision Pro 版本',
    },
    footer: {
      tagline: '把照片和视频带进每一个 Apple 设备',
      copyright: '© 2026 忆境空间 (YJing). All rights reserved.',
      privacy: '隐私政策',
      terms: '服务条款',
    },
  },
  en: {
    nav: {
      features: 'Features',
      iphone: 'iPhone',
      ipad: 'iPad',
      mac: 'Mac',
      vision: 'Vision Pro',
      download: 'Download',
    },
    hero: {
      eyebrow: 'YJing',
      title: 'One App. Four Platforms.',
      subtitle: 'Meet your memories on every Apple device.',
      cta_primary: 'Download on the App Store',
      cta_secondary: 'See all features',
    },
    pillars: {
      heading: 'Four things that set YJing apart',
      one_app: {
        title: 'One App. Four Platforms.',
        body: 'A single Apple Universal Purchase covers iPhone, iPad, Mac, and Vision Pro. Pay once, sign in everywhere.',
      },
      reel: {
        title: 'Cinematic Reel Playback',
        body: 'Photos and videos stream at 60fps via CADisplayLink + CALayer dual-tile tiling. Switch between vertical and horizontal at will. Tap to pause, double-tap to exit. Your folder becomes your private theater.',
      },
      privacy: {
        title: 'Privacy First',
        body: 'PIN, gesture, Face ID, Touch ID — multi-layer locks with folder-level granularity. Hidden files, auto-hide on background, local-first storage. Your data never leaves your device.',
      },
      space: {
        title: 'Memories in Space',
        body: 'Vision Pro brings your photo wall into real space. Video plays where your eyes focus. ARKit anchoring keeps the wall stable in the room. Walk in. Look around. Remember.',
      },
    },
    reel_showcase: {
      eyebrow: 'Signature Feature · Across All Four',
      title: 'Tap Play. Photos and videos flow.',
      body: 'YJing turns folders into a continuous visual stream. CADisplayLink drives 60fps scrolling. CALayer dual-tile tiling enables infinite loops. Videos auto-advance after a single play. From iPhone’s flight launch animation to Mac’s windowed masonry to Vision Pro’s gaze-triggered playback — all four platforms share the same pure-function layout core.',
      bullets: [
        '60fps smooth scrolling, stable at 6,000+ items',
        'Vertical / horizontal orientation, your call',
        'Single tap to pause, double tap to exit, instant reclaim on lock',
        'Video mute toggle, looped playback, dynamic scroll speed',
      ],
    },
    iphone: {
      eyebrow: 'iPhone',
      title: 'A private media library in your pocket',
      body: 'Masonry preview, multi-layer unlock, WiFi file transfer, shake gestures — the most restrained privacy-first media manager on iOS.',
      features: [
        { title: 'Masonry Preview', body: 'Four view modes: masonry, justified, uniform grid, list. Drag-to-reorder, batch selection, long-press menus.' },
        { title: 'Multi-Layer Unlock', body: 'PIN (4–6 digits), 3×3 gesture, Face ID — any combination. Gradient cooldown 30s→15min. Credentials hashed SHA256 + 16-byte salt in Keychain.' },
        { title: 'WiFi File Transfer', body: 'Same WiFi, browser access with a one-time 4-digit PIN. Manages Documents directly. GCDWebServer locally — never goes through the internet.' },
        { title: 'Shake Gesture', body: 'Three sensitivity levels. Multi-peak edge detection algorithm naturally distinguishes "shake" from "drop on desk." Toggles hidden files or playback.' },
        { title: 'Nine Languages', body: 'Simplified Chinese, Traditional Chinese, English, Japanese, Korean, German, French, Spanish, Russian. Switch in-app, instant refresh.' },
      ],
    },
    ipad: {
      eyebrow: 'iPad',
      title: 'Big screen. Full immersion.',
      body: 'Same app, scaled up to fit iPad multitasking and the larger NavigationSplitView canvas.',
      features: [
        { title: 'Landscape Reel', body: 'Turn your iPad into a private projection table. One-finger infinite scroll. Photos and videos hand off seamlessly.' },
        { title: 'Split View', body: 'NavigationSplitView optimized for iPad. Side-by-side multitasking. Magic Keyboard and trackpad fully supported.' },
        { title: 'Apple Pencil Friendly', body: 'Drag, batch select, long-press menus — every touch interaction stretches naturally on the iPad canvas.' },
      ],
    },
    mac: {
      eyebrow: 'Mac',
      title: 'A pro-grade image and video center',
      body: 'Native macOS 26 SwiftUI app. Three-pane NavigationSplitView, Inspector panel, ambient warm-light theme, CALayer-rendered windowed masonry — Finder, leveled up.',
      features: [
        { title: 'Marquee Selection', body: 'Drag from any empty space to draw a selection. ⌘ toggle, ⇧ additive, plain replace — Finder semantics. 6000+ items run O(1+N/cols) via column bucketing.' },
        { title: 'Inspector Panel', body: '⌘I toggles the right-side panel: metadata, multi-select size, 4-bucket classification (folders / photos / videos / others) with thumbnail preview.' },
        { title: 'Hover Video Preview', body: '300ms cursor hover plays muted on-the-spot. App-wide singleton AVPlayer. Six gates of pure-function gating — only fires when window focus, drag-state, scroll-state all pass.' },
        { title: 'Image Rotate + Zoom', body: 'JPEG / HEIC / TIFF rewrite EXIF orientation. PNG goes pixel-rewrite. Atomic write with rollback. Wheel / trackpad zoom 1.0–8.0× anchored to cursor position.' },
        { title: 'Ambient Warm Theme', body: 'Light and dark amber palettes (30+ tokens). Ambient wallpaper = linear gradient + primary/secondary radials. One-click switch, sun/moon toolbar icon follows.' },
        { title: 'Touch ID Unlock', body: 'Dual PIN (App + folder) + Touch ID. Three-state lock (locked / sessionUnlocked / unlocked), hard locks persisted. Independent failure cooldown counters.' },
      ],
      hero_feature: {
        title: 'A system-class image & video viewer',
        subtitle: 'Set as default in Finder → Open With',
        body: 'YJing isn’t just an app — it’s a media viewer. Make it the default opener for image and video file types, and double-click any file in Finder to launch the YJing preview window. Auto sibling expansion lets arrow keys page through the same folder. It’s Preview and QuickLook, leveled up. Single-file preview runs standalone — no folder browse needed.',
      },
    },
    vision: {
      eyebrow: 'Vision Pro',
      title: 'Walk into your memories',
      body: 'Bring your library into Vision Pro space. A 3D photo wall you can walk around, zoom into, and trigger with a glance. Memories, no longer thumbnail-sized.',
      features: [
        { title: 'Spatial Photo Wall', body: 'Imported photos and videos auto-arrange into a 3D wall you can roam in immersive space. ARKit keeps the wall anchored stably in the real room.' },
        { title: 'Gaze-Focused Playback', body: 'Videos play wherever your eyes focus. Center playback, looping, dynamic scroll speed — videos breathe with the space.' },
        { title: 'Spatial Zoom', body: 'Pull a single photo or video close for detail. Smooth, reversible. Pinch-to-resize with two hands.' },
        { title: 'visionOS Native', body: 'Built natively for visionOS 2.2+. SwiftUI + RealityKit + ARKit. Custom ConcurrencyLimiter / AsyncSemaphore controls media loading concurrency to avoid memory peaks.' },
      ],
    },
    universal: {
      eyebrow: 'One App. Every Apple Device.',
      title: 'One App. Every Apple Device.',
      body: 'Through Apple Universal Purchase, a single payment unlocks YJing on iPhone, iPad, Mac, and Vision Pro. Settings, subscriptions, and unlock state stay in sync across iCloud.',
      requirements: 'iOS 26 · iPadOS 26 · macOS 26 · visionOS 2.2',
    },
    cta: {
      title: 'Ready to bring memories into every Apple device?',
      body: 'Search "YJing" on the App Store or use the link below.',
      app_store_alt: 'Download on the App Store',
      vision_link: 'See Vision Pro version',
    },
    footer: {
      tagline: 'Bring your photos and videos into every Apple device',
      copyright: '© 2026 YJing. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
    },
  },
} as const;

export const APP_STORE_VISION_URL =
  'https://apps.apple.com/cn/app/%E5%BF%86%E5%A2%83%E7%A9%BA%E9%97%B4/id6743648639?platform=vision';
export const APP_STORE_UNIVERSAL_URL =
  'https://apps.apple.com/cn/app/%E5%BF%86%E5%A2%83%E7%A9%BA%E9%97%B4/id6743648639';
