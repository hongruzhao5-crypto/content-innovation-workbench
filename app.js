const modules = [
  {
    id: "buyerDesk",
    title: "投手今日作战台",
    nav: "投手",
    icon: "target",
    priority: "P0",
    status: "首页",
    description: "投手每天的主入口，集中处理待调账户、素材审核、卡审反馈、低质搬运、台账核算和充值开票。",
    owner: "投手组",
    next: "拆账户调整动作",
    actions: ["打开千川账户", "记录调整", "处理卡审", "查看复盘"],
  },
  {
    id: "editorDesk",
    title: "剪辑今日作战台",
    nav: "剪辑",
    icon: "scissors",
    priority: "P0",
    status: "新增",
    description: "剪辑每天的主入口，集中处理精剪任务、网络素材收集、素材上传、投手反馈修改和拍摄任务。",
    owner: "剪辑组",
    next: "拆剪辑任务流",
    actions: ["领取精剪任务", "上传素材库", "处理反馈修改", "提交拍摄素材"],
  },
  {
    id: "cockpit",
    title: "管理驾驶舱",
    nav: "驾驶舱",
    icon: "gauge",
    priority: "P0",
    status: "管理视角",
    description: "管理者查看经营结果、异常趋势、任务完成、素材进度、台账状态和老板关注指标。",
    owner: "管理者",
    next: "确定首页指标和待办规则",
    actions: ["查看部门经营", "查看异常", "查看任务完成", "生成汇报"],
  },
  {
    id: "materials",
    title: "素材中心",
    nav: "素材",
    icon: "image",
    priority: "P0",
    status: "空壳",
    description: "承载网络素材、精剪素材、飞流素材、产品拍摄素材、卡审问题素材和低质搬运素材。",
    owner: "剪辑组 / 投手组",
    next: "画素材审核反馈流",
    actions: ["审核素材", "反馈修改", "上传账户", "处理低质搬运"],
  },
  {
    id: "productCard",
    title: "商品卡中心",
    nav: "商品卡",
    icon: "shopping-bag",
    priority: "P0",
    status: "空壳",
    description: "管理商品卡素材审核、计划上传、千川投放数据、台账核算、充值开票和退货率。",
    owner: "投手组",
    next: "整理商品卡日流程",
    actions: ["打开商品卡账户", "上传素材", "导出数据", "核算台账"],
  },
  {
    id: "slicing",
    title: "切片中心",
    nav: "切片",
    icon: "clapperboard",
    priority: "P0",
    status: "空壳",
    description: "管理切片素材审核、达人账户上传、切片千川数据、台账核算、充值和挂账。",
    owner: "投手组",
    next: "整理切片日流程",
    actions: ["打开达人账户", "审核切片", "上传素材", "跟进挂账"],
  },
  {
    id: "accounts",
    title: "账户中心",
    nav: "账户",
    icon: "wallet-cards",
    priority: "P0",
    status: "空壳",
    description: "管理千川账户、达人账户、抖音账号、登录状态、账户链接、充值、开票、挂账和账户素材维护。",
    owner: "投手组",
    next: "建立账户登录清单",
    actions: ["打开后台", "检查登录态", "记录充值", "记录开票"],
  },
  {
    id: "finance",
    title: "财务模块",
    nav: "财务",
    icon: "landmark",
    priority: "P0",
    status: "新增",
    description: "承载台账、充值提醒和发票对账，避免账户因为余额、挂账或发票问题影响投手正常投放。",
    owner: "投手组 / 财务",
    next: "建立台账、充值、发票三条工作流",
    actions: ["查看台账", "创建充值提醒", "发票对账", "通知投手"],
  },
  {
    id: "aiImages",
    title: "图片审核及制作",
    nav: "图片审核",
    icon: "sparkles",
    priority: "P1",
    status: "审核优先",
    description: "先做美妆个护图片与文案合规审核，通过后再接 OpenAI Imagine 生图制作，最后产出可被投手和剪辑引用的图片。",
    owner: "投手组 / 剪辑组",
    next: "接入 beauty-compliance-audit 审核规则，再接 OpenAI Imagine 生成链路",
    actions: ["上传审核", "违规改写", "通过后生图", "产出图片", "引用记录"],
  },
  {
    id: "reports",
    title: "数据报表",
    nav: "报表",
    icon: "bar-chart-3",
    priority: "P0",
    status: "空壳",
    description: "承载商品卡日报、切片日报、素材任务日报、账户维护日报、月度业绩核算和老板汇报。",
    owner: "投手组 / 管理者",
    next: "整理台账核算流程",
    actions: ["导入 CSV", "触发核算", "检查群消息", "生成日报"],
  },
  {
    id: "automation",
    title: "自动化中心",
    nav: "自动化",
    icon: "workflow",
    priority: "P1",
    status: "空壳",
    description: "承载 CSV 导入、n8n 核算、自动日报、异常提醒、飞书通知和失败任务人工接管。",
    owner: "系统",
    next: "从台账核算开始",
    actions: ["查看执行日志", "重试失败任务", "人工接管", "配置提醒"],
  },
  {
    id: "backendData",
    title: "数据源接入层",
    nav: "数据源",
    icon: "database-zap",
    priority: "P0",
    status: "接入层",
    description: "优先通过内置浏览器自动采集千川后台、截图识别和规则抽取生成任务；飞书/WPS 只作为历史底表和兜底数据源。",
    owner: "系统 / 运营",
    next: "先打通内置浏览器采集规则，再补飞书/WPS字段映射",
    actions: ["打开后台采集", "截图识别", "抽取字段", "推送任务"],
  },
  {
    id: "system",
    title: "系统管理",
    nav: "系统",
    icon: "shield-check",
    priority: "P2",
    status: "空壳",
    description: "员工、组别、角色、权限、操作日志、字段配置和通知设置。",
    owner: "管理员",
    next: "确定角色权限",
    actions: ["配置人员", "配置权限", "查看日志", "配置字段"],
  },
];

const todos = [
  ["进入千川账户做调整", "投手工作台 / 登录对应账户后处理计划"],
  ["领取今日精剪任务", "剪辑工作台 / 查看本周 70-75 条任务进度"],
  ["审核商品卡精剪素材", "投手组 / 有问题反馈对应剪辑"],
  ["跟进卡审问题素材", "素材中心 / 提审或删除低质搬运"],
  ["确认充值与发票", "财务模块 / 余额不足和发票异常会影响投放"],
  ["完成台账核算检查", "数据报表 / 等待 n8n 返回结果"],
];

const buyerProfiles = [
  {
    id: "liuxiuting",
    name: "刘秀厅",
    role: "投手组长",
    today: "商品卡素材审核 / 切片素材复审 / 低质搬运处理 / 账户充值跟进",
    productAccounts: [
      ["商品卡-赫本希", "ROI 低", "进入千川账户调整计划", "打开后台"],
      ["商品卡-牙膏新包装", "素材待上传", "审核精剪素材后上传计划", "上传素材"],
    ],
    sliceAccounts: [
      ["切片-秀厅达人账户", "素材待复审", "14:00-18:00 审查切片素材", "查看素材"],
      ["切片-直播投放账户", "充值待确认", "确认余额和充值到账状态", "确认充值"],
    ],
  },
  {
    id: "yuanjiale",
    name: "苑佳乐",
    role: "投手组员",
    today: "切片数据导出 / 切片台账核算 / 切片账户充值 / 挂账和开票跟进",
    productAccounts: [
      ["商品卡-协助账户", "数据待核对", "交叉检查商品卡日报异常", "核对数据"],
      ["商品卡-低质搬运", "待处理", "提审或删除低质搬运素材", "处理素材"],
    ],
    sliceAccounts: [
      ["切片-佳乐千川账户", "低质搬运", "进入账户处理提审或删除", "打开后台"],
      ["切片-达人账户组", "挂账跟进", "更新充值记录和挂账状态", "更新记录"],
    ],
  },
  {
    id: "lishuhua",
    name: "李树花",
    role: "投手组员",
    today: "商品卡数据导出 / 商品卡台账核算 / 商品卡开票 / 充值记录更新",
    productAccounts: [
      ["商品卡-花花主账户", "待充值", "记录充值金额并确认到账", "记录充值"],
      ["商品卡-计划维护账户", "卡审问题", "反馈卡审点给剪辑修改", "处理卡审"],
    ],
    sliceAccounts: [
      ["切片-协助账户", "素材待上传", "确认素材无误后上传达人账户", "上传素材"],
      ["切片-开票跟进", "发票待核对", "核对开票金额并交财务", "核对发票"],
    ],
  },
];

const buyerProjectRows = [
  {
    title: "商品卡项目",
    icon: "shopping-bag",
    detail: "进入商品卡账户、计划、素材、台账和充值动作。",
    target: "商品卡账户",
  },
  {
    title: "切片项目",
    icon: "clapperboard",
    detail: "进入切片账户、达人素材、投流数据、挂账和开票动作。",
    target: "切片账户",
  },
  {
    title: "素材审核",
    icon: "badge-check",
    detail: "处理卡审素材、低质搬运、待上传素材和剪辑反馈。",
    target: "素材/评论",
  },
];

const buyerDailyActions = [
  ["充值检查", "wallet", "检查余额、充值到账、挂账和开票状态，避免账户停跑。"],
  ["上传素材", "upload-cloud", "把已确认素材上传到对应商品卡或切片账户计划。"],
  ["卡审提审", "badge-check", "筛选卡审素材，合格则提审，有问题则反馈剪辑。"],
  ["数据调控", "sliders-horizontal", "进入账户看数据，执行删素材、调 ROI、调预算、追投、一键起量。"],
  ["素材数据分析", "line-chart", "查看账户内素材数据，判断保留、放量、替换或删除。"],
  ["评论处理", "message-square-x", "处理评论区差评、异常评论和影响投放转化的问题。"],
];

const imageProductionSteps = [
  {
    title: "1. 图片/文案审核",
    icon: "scan-eye",
    status: "前置必做",
    detail: "接入 beauty-compliance-audit：先审主图、详情页、封面图里的美妆个护违规词和违规宣称。",
    action: "上传审核",
  },
  {
    title: "2. 违规改写确认",
    icon: "file-pen-line",
    status: "人工复核",
    detail: "命中医疗功效、绝对化、安全承诺、驱蚊农药等高危项时，先给改写建议，确认后才能进入制作。",
    action: "查看建议",
  },
  {
    title: "3. OpenAI Imagine 生图",
    icon: "sparkles",
    status: "待接接口",
    detail: "审核通过后，把合规卖点、产品信息、画面要求送入 OpenAI Imagine，生成商品主图、场景图、对比图或封面图。",
    action: "开始生图",
  },
  {
    title: "4. 产出与引用",
    icon: "image-check",
    status: "可追踪",
    detail: "生成图进入成品池，记录来源、审核状态、提示词、用途，并开放给投手和剪辑引用。",
    action: "查看成品",
  },
];

const complianceRuleRows = [
  ["医疗功效", "高危", "治疗、消炎、止痒、杀菌、祛斑、生发等药用/疗效表达"],
  ["绝对化", "高危", "最、第一、顶级、国家级、唯一、首选、快速见效等绝对化用语"],
  ["安全承诺", "高危", "0刺激、无副作用、婴童可用、全家可用、纯天然、100%、99% 等承诺"],
  ["驱蚊农药", "高危", "防蚊、驱蚊、灭蚊、蚊虫叮咬等农药类功能宣称"],
];

const imageOutputRows = [
  ["商品主图", "审核通过后生成", "商品卡 / 投放入口可引用"],
  ["场景图", "审核通过后生成", "剪辑、素材库、商品详情可引用"],
  ["对比图", "审核通过后生成", "需要避免夸大功效和前后对比违规"],
  ["封面图", "审核通过后生成", "短视频、切片、素材封面可引用"],
  ["待审核图", "审核中", "未通过前不能进入生成和引用"],
  ["生成记录", "自动沉淀", "记录提示词、审核结果、输出图片和引用人"],
];

const editorRows = [
  ["罗沛任务分配", "组长", "本周精剪分配", "分配 70-75 条/人", "分配任务"],
  ["戴秀婷", "剪辑组员", "反馈修改", "处理投手卡审反馈", "查看反馈"],
  ["周亮", "剪辑组员", "网络素材", "2 个品类 / 20 条素材", "上传素材"],
  ["邹泽敏", "剪辑组员", "拍摄任务", "牙膏/面膜/防晒素材", "提交素材"],
];

const financeRows = [
  ["台账", "商品卡核算 / 切片核算 / WPS 台账", "2 个来源待确认", "接入在线台账后核对收入、成本、退款、佣金和利润", "查看台账"],
  ["充值提醒", "WPS 千川账户登记表", "4 个账户需处理", "按账号名、登记人、项目拆分余额提醒和到账状态", "创建提醒"],
  ["发票对账", "商品卡 / 切片发票", "3 张待核对", "按商品卡和切片项目核对开票金额、收票状态和异常差额", "开始对账"],
];

const dataSourceRows = [
  {
    name: "璟美空间检查分析表",
    platform: "飞书",
    status: "文件夹已访问",
    owner: "运营后台",
    sync: "未来 API / 文档连接器",
    feeds: "管理驾驶舱 / 投手工作台 / 素材中心",
    fields: ["检查类型", "账号/素材", "异常项", "负责人", "处理状态"],
    targetTable: "异常检查表",
    next: "已读取文件列表，待深入检查分析表",
  },
  {
    name: "商品卡核算",
    platform: "飞书",
    status: "台账可读",
    owner: "商品卡投手",
    sync: "未来 API / 定时同步",
    feeds: "商品卡中心 / 财务模块 / 数据报表",
    fields: ["日期", "账户名", "登记人", "收入", "成本", "利润", "异常"],
    targetTable: "商品卡核算表",
    next: "已读取台账结构和店铺退款率表",
  },
  {
    name: "切片核算",
    platform: "飞书",
    status: "台账可读",
    owner: "切片投手",
    sync: "未来 API / 定时同步",
    feeds: "切片中心 / 财务模块 / 数据报表",
    fields: ["日期", "达人/账户", "登记人", "消耗", "佣金", "挂账", "异常"],
    targetTable: "切片核算表",
    next: "已读取台账结构和达人昵称库",
  },
  {
    name: "千川后台账户状态自动采集",
    platform: "内置浏览器 / 截图识别",
    status: "设计主链路",
    owner: "投手组 / 财务",
    sync: "员工打开账户时自动截图、识别余额/状态/ROI/卡审提示",
    feeds: "投手工作台 / 账户中心 / 财务模块",
    fields: ["账户名", "余额", "账户状态", "ROI", "卡审提示", "低质搬运"],
    targetTable: "账户实时状态表",
    next: "配置截图区域和字段抽取规则",
  },
  {
    name: "抖音千川账户登记表3.13",
    platform: "WPS / 金山文档",
    status: "历史底表",
    owner: "投手组 / 财务",
    sync: "当前下载文件 / 后续仅作账户归属兜底",
    feeds: "投手工作台 / 账户中心 / 财务模块",
    fields: ["账号名", "登记人", "项目", "商品卡/切片", "充值", "开票"],
    targetTable: "账户归属底表",
    next: "不作为日常工作主数据入口",
  },
];

const fieldMappingRows = [
  ["内置浏览器 千川后台", "余额 / 状态 / ROI / 卡审提示", "投手工作台.今日任务", "待配置规则"],
  ["内置浏览器 千川后台", "卡审失败素材 / 低质搬运", "素材中心.卡审转交", "待配置规则"],
  ["内置浏览器 千川后台", "截图 / 页面文本 / 操作结果", "自动化中心.采集日志", "待配置规则"],
  ["WPS 千川账户登记表", "登记人 / 项目 / 账户ID", "账户归属底表", "历史兜底"],
  ["飞书 商品卡核算", "核算批次 / 店铺明细JSON / 核算时间 / GSV ROI", "商品卡核算表", "已识别"],
  ["飞书 切片核算", "源文件 / 核算结果 / 运营人业绩 / 达人业绩", "切片核算表", "已识别"],
  ["飞书 璟美空间检查分析", "文件夹 / 总控看板 / 周报监控表", "异常检查表", "已识别"],
];

const syncRuleRows = [
  ["P0", "内置浏览器 千川后台", "打开账户自动采集", "账户实时状态 / 今日任务", "待接"],
  ["P1", "飞书 商品卡核算", "每日 9:30 同步", "商品卡日报 / 财务台账", "待接口"],
  ["P1", "飞书 切片核算", "每日 9:30 同步", "切片日报 / 财务台账", "待接口"],
  ["P2", "飞书 璟美空间检查分析", "每 2 小时同步", "异常中心 / 驾驶舱", "待接口"],
];

let activeModuleId = "buyerDesk";
let activeFilter = "all";
let activeBuyerId = "liuxiuting";
let activeBrowserAccountKey = "";
const realAccountRows = Array.isArray(window.realAccountRows) ? window.realAccountRows : [];
const feishuSources = window.feishuSourceRows || { folders: [], tables: [] };
const isElectronShell = typeof navigator !== "undefined" && navigator.userAgent.includes("Electron");

const loginView = document.querySelector("#loginView");
const erpView = document.querySelector("#erpView");
const loginForm = document.querySelector("#loginForm");
const moduleNav = document.querySelector("#moduleNav");
const chartArea = document.querySelector("#chartArea");
const todoList = document.querySelector("#todoList");
const operationTable = document.querySelector("#operationTable");
const pageTitle = document.querySelector("#pageTitle");
const moduleTitle = document.querySelector("#moduleTitle");
const moduleDescription = document.querySelector("#moduleDescription");
const moduleStatus = document.querySelector("#moduleStatus");
const metricGrid = document.querySelector(".metric-grid");
const tablePanel = document.querySelector(".table-panel");
const topbarAlertButton = document.querySelector(".topbar-actions .ghost-button");

function getActiveModule() {
  return modules.find((item) => item.id === activeModuleId) || modules[0];
}

function priorityKey(priority) {
  return priority.toLowerCase();
}

function renderNav() {
  moduleNav.innerHTML = modules
    .map(
      (item) => `
        <button class="nav-item ${item.id === activeModuleId ? "active" : ""}" type="button" data-module="${item.id}">
          <i data-lucide="${item.icon}"></i>
          <span>${item.nav}</span>
          <span class="nav-priority">${item.priority}</span>
        </button>
      `,
    )
    .join("");
}

function renderCards() {
  chartArea.innerHTML = modules
    .filter((item) => activeFilter === "all" || priorityKey(item.priority) === activeFilter)
    .map(
      (item) => `
        <article class="module-card ${item.id === activeModuleId ? "active" : ""}" data-module="${item.id}" tabindex="0">
          <div class="card-top">
            <span class="card-icon"><i data-lucide="${item.icon}"></i></span>
            <span class="priority">${item.priority}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
}

function getActiveBuyer() {
  return buyerProfiles.find((item) => item.id === activeBuyerId) || buyerProfiles[0];
}

function getBuyerAccounts(buyerName, accountType) {
  return realAccountRows.filter((row) => row.登记人 === buyerName && row.账户类型 === accountType);
}

function getBuyerRows(buyerName) {
  return realAccountRows.filter((row) => row.登记人 === buyerName);
}

function getAbnormalRows(rows) {
  return rows.filter((row) => row.今日异常 !== "正常使用中");
}

function getRechargeRows(rows) {
  return rows.filter((row) => Number(row.余额) >= 0 && Number(row.余额) < 1000);
}

function getBuyerStats(buyerName) {
  const rows = realAccountRows.filter((row) => row.登记人 === buyerName);
  const productCount = rows.filter((row) => row.账户类型 === "商品卡").length;
  const sliceCount = rows.filter((row) => row.账户类型 === "切片").length;
  const uncategorizedCount = rows.filter((row) => row.账户类型 === "未归类").length;
  const abnormalCount = rows.filter((row) => row.今日异常 !== "正常使用中").length;
  return { rows, productCount, sliceCount, uncategorizedCount, abnormalCount };
}

function formatMoney(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "未填";
  }
  return Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 2 });
}

function renderAccountCards(rows, owner) {
  return rows
    .map(
      (row) => `
        <article class="account-card">
          <div>
            <strong>${row.账户名称}</strong>
            <span>${owner} / ${row.账户ID || "无账户ID"}</span>
          </div>
          <div class="issue-tag">${row.今日异常}</div>
          <p>余额 ${formatMoney(row.余额)} / 状态：${row.账户状态}</p>
          <p>${row.项目} / ${row.账户用途 || "用途未填"}${row.备注 ? ` / ${row.备注}` : ""}</p>
          <button class="mini-button" type="button">查看账户</button>
        </article>
      `,
    )
    .join("");
}

function formatAccountName(row) {
  return row.账户名称 || row.当前账户名称 || "未命名账户";
}

function getAccountKey(row) {
  return row.账户ID || `${row.登记人}-${formatAccountName(row)}`;
}

function findAccountByKey(key) {
  return realAccountRows.find((row) => getAccountKey(row) === key) || null;
}

function getAccountBrowserUrl(row) {
  const accountId = row && row.账户ID ? `?account_id=${encodeURIComponent(row.账户ID)}` : "";
  return `https://qianchuan.jinritemai.com/${accountId}`;
}

function uniqueRows(rows) {
  const seen = new Set();
  return rows.filter((row) => {
    const key = row.账户ID || `${row.登记人}-${formatAccountName(row)}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function renderWorkQueueCard({ title, icon, count, meta, detail, button, tone = "" }) {
  return `
    <article class="work-queue-card ${tone}">
      <div class="work-card-top">
        <span><i data-lucide="${icon}"></i>${title}</span>
        <strong>${count}</strong>
      </div>
      <p>${detail}</p>
      <div class="work-card-bottom">
        <small>${meta}</small>
        <button class="mini-button" type="button">${button}</button>
      </div>
    </article>
  `;
}

function renderWorkRows(rows, emptyText) {
  if (!rows.length) {
    return `<div class="empty-state">${emptyText}</div>`;
  }

  return rows
    .map(
      (row) => `
        <div class="work-row ${getAccountKey(row) === activeBrowserAccountKey ? "active" : ""}">
          <div>
            <strong>${formatAccountName(row)}</strong>
            <span>${row.账户类型} / 余额 ${formatMoney(row.余额)} / ${row.账户状态}</span>
          </div>
          <div class="issue-tag">${row.今日异常}</div>
          <button class="mini-button" type="button" data-open-account="${getAccountKey(row)}">查看账户</button>
        </div>
      `,
    )
    .join("");
}

function getBuyerWorkRows(buyerName) {
  const rows = getBuyerRows(buyerName);
  const abnormalRows = getAbnormalRows(rows);
  const rechargeRows = getRechargeRows(rows);
  const selected = uniqueRows([...abnormalRows, ...rechargeRows, ...rows]).slice(0, 14);

  return selected.map((row, index) => {
    const balance = Number(row.余额);
    const isLowBalance = Number.isFinite(balance) && balance < 1000;
    const isAbnormal = row.今日异常 !== "正常使用中";
    const priority = isAbnormal ? "P0" : isLowBalance ? "P1" : "P2";
    const nextAction = isAbnormal
      ? "先核对账户状态"
      : isLowBalance
        ? "确认是否充值"
        : index % 3 === 0
          ? "等待昨日 ROI"
          : "例行巡检";
    return { ...row, priority, isLowBalance, isAbnormal, nextAction };
  });
}

function renderBuyerERPTable(rows) {
  return `
    <div class="erp-work-table shooter-table">
      <div class="erp-table-row header">
        <div>优先级</div>
        <div>账户</div>
        <div>类型</div>
        <div>余额</div>
        <div>账户状态</div>
        <div>昨日 ROI</div>
        <div>今日动作</div>
        <div>操作</div>
      </div>
      ${rows
        .map(
          (row) => `
            <div class="erp-table-row">
              <div><span class="priority-badge ${row.priority.toLowerCase()}">${row.priority}</span></div>
              <div>
                <strong>${formatAccountName(row)}</strong>
                <small>${row.账户ID || "无账户ID"}</small>
              </div>
              <div>${row.账户类型} / ${row.项目}</div>
              <div>${formatMoney(row.余额)}</div>
              <div><span class="state-tag ${row.isAbnormal ? "warning" : ""}">${row.今日异常}</span></div>
              <div><span class="state-tag muted-tag">待同步</span></div>
              <div>${row.nextAction}</div>
              <div class="erp-row-actions">
                <button class="mini-button" type="button" data-open-account="${getAccountKey(row)}">打开后台</button>
                <button class="mini-button" type="button">转剪辑</button>
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderEmbeddedBrowserPanel(rows) {
  const selectedAccount = findAccountByKey(activeBrowserAccountKey) || rows[0] || null;
  const selectedName = selectedAccount ? formatAccountName(selectedAccount) : "未选择账户";
  const selectedStatus = selectedAccount ? `${selectedAccount.账户类型} / ${selectedAccount.账户状态} / 余额 ${formatMoney(selectedAccount.余额)}` : "从账户调整队列点击查看账户后打开";
  const browserUrl = selectedAccount ? getAccountBrowserUrl(selectedAccount) : "about:blank";

  return `
    <section class="embedded-browser-panel">
      <div class="embedded-browser-header">
        <div>
          <span>内置浏览器</span>
          <h3>${selectedName}</h3>
          <p>${selectedStatus}</p>
        </div>
        <div class="browser-toolbar">
          <button class="icon-button" type="button" aria-label="后退"><i data-lucide="arrow-left"></i></button>
          <button class="icon-button" type="button" aria-label="前进"><i data-lucide="arrow-right"></i></button>
          <button class="icon-button" type="button" aria-label="刷新"><i data-lucide="refresh-cw"></i></button>
          <button class="mini-button" type="button">保持登录</button>
        </div>
      </div>
      <div class="browser-address-row">
        <i data-lucide="lock-keyhole"></i>
        <span>${browserUrl}</span>
      </div>
      ${
        isElectronShell
          ? `<webview class="embedded-browser-webview" src="${browserUrl}" partition="persist:qianchuan-accounts" allowpopups></webview>`
          : `
            <div class="embedded-browser-placeholder">
              <i data-lucide="monitor-up"></i>
              <strong>桌面端将直接在这里打开千川账户登录页</strong>
              <span>当前公网网页只展示内置浏览器工作区。未来员工点击“查看账户”后，会在桌面端进入该账户后台并复用登录状态。</span>
            </div>
          `
      }
    </section>
  `;
}

function renderBuyerDesk() {
  const buyer = getActiveBuyer();
  const rows = getBuyerRows(buyer.name);
  const stats = getBuyerStats(buyer.name);
  const abnormalRows = getAbnormalRows(rows);
  const rechargeRows = getRechargeRows(rows);
  const workRows = getBuyerWorkRows(buyer.name);
  const productRows = getBuyerAccounts(buyer.name, "商品卡");
  const sliceRows = getBuyerAccounts(buyer.name, "切片");
  const pendingSyncRows = [
    ["昨日 ROI", "内置浏览器逐账户采集", "待接"],
    ["账户状态", "千川后台自动截图识别", "待接"],
    ["卡审素材", "识别后推送投手+剪辑", "待接"],
    ["剪辑转交", "卡审问题自动生成修改任务", "待接"],
    ["发票异常", "财务台账", "待接"],
  ];
  const processRows = [
    ["自动巡检账户", "内置浏览器挨个打开账户，截图并抽取余额、状态、ROI、卡审提示", "待接"],
    ["推送投手任务", "账户异常、低余额、ROI 异常自动推给对应投手", rechargeRows.length ? `${rechargeRows.length} 个待处理` : "暂无低余额"],
    ["卡审同步剪辑", "卡审不过的素材同时推给投手和对应剪辑，形成修改任务", "待接"],
    ["员工操作采集", "投手在内置浏览器操作时，系统记录打开账户、提审、删除、上传等动作", "待接"],
    ["日报沉淀", "账户动作、异常、截图和处理结果自动写入日报", "待接"],
  ];
  chartArea.innerHTML = `
    <div class="shooter-workbench">
      <section class="shooter-main">
        <div class="admin-page-meta">
          <div>
            <span>内容创新部 / 投放业务</span>
            <strong>投手每日处理中心</strong>
          </div>
          <div class="admin-meta-tags">
            <span>内置浏览器采集优先</span>
            <span>人工表格仅兜底</span>
            <span>卡审同步投手+剪辑</span>
          </div>
        </div>

        <div class="shooter-commandbar">
          <div class="buyer-segment" aria-label="切换投手">
            ${buyerProfiles
              .map(
                (item) => `
                  <button class="buyer-segment-button ${item.id === activeBuyerId ? "active" : ""}" type="button" data-buyer="${item.id}">
                    <strong>${item.name}</strong>
                    <span>${item.role}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
          <div class="command-actions">
            <button class="ghost-button" type="button"><i data-lucide="search"></i> 查询</button>
            <button class="ghost-button" type="button"><i data-lucide="download"></i> 导出</button>
            <button class="primary-button" type="button"><i data-lucide="refresh-cw"></i> 同步</button>
          </div>
        </div>

        <div class="admin-query-panel">
          <label>
            <span>账户关键词</span>
            <input type="text" placeholder="账户名 / ID / 店铺 / 达人" />
          </label>
          <label>
            <span>业务类型</span>
            <select>
              <option>全部</option>
              <option>商品卡</option>
              <option>切片</option>
              <option>未归类</option>
            </select>
          </label>
          <label>
            <span>处理状态</span>
            <select>
              <option>全部状态</option>
              <option>账户异常</option>
              <option>待充值</option>
              <option>待同步</option>
            </select>
          </label>
          <label>
            <span>数据来源</span>
            <select>
              <option>内置浏览器自动采集</option>
              <option>千川后台截图识别 待接</option>
              <option>历史账户登记表 兜底</option>
            </select>
          </label>
          <div class="query-actions">
            <button class="ghost-button" type="button"><i data-lucide="search"></i> 查询</button>
            <button class="ghost-button" type="button"><i data-lucide="rotate-ccw"></i> 重置</button>
          </div>
        </div>

        <div class="shooter-summary">
          <div><span>真实账户</span><strong>${stats.rows.length}</strong></div>
          <div><span>商品卡账户</span><strong>${productRows.length}</strong></div>
          <div><span>切片账户</span><strong>${sliceRows.length}</strong></div>
          <div><span>账户异常</span><strong>${abnormalRows.length}</strong></div>
          <div><span>今日待充值</span><strong>${rechargeRows.length}</strong></div>
          <div><span>昨日 ROI</span><strong>待同步</strong></div>
        </div>

        <div class="business-object-row">
          <article><i data-lucide="wallet-cards"></i><div><strong>千川账户</strong><span>自动采集余额、状态、低质搬运、登录异常</span></div></article>
          <article><i data-lucide="badge-check"></i><div><strong>素材卡审</strong><span>识别驳回原因后同步投手和对应剪辑</span></div></article>
          <article><i data-lucide="receipt-text"></i><div><strong>财务确认</strong><span>低余额、充值到账、挂账和发票异常提醒</span></div></article>
          <article><i data-lucide="bar-chart-3"></i><div><strong>经营日报</strong><span>ROI、消耗、截图和动作记录自动沉淀</span></div></article>
        </div>

        <div class="shooter-tabs">
          <button class="erp-tab active" type="button">今日待处理</button>
          <button class="erp-tab" type="button">商品卡</button>
          <button class="erp-tab" type="button">切片</button>
          <button class="erp-tab" type="button">素材审核</button>
          <button class="erp-tab" type="button">卡审转交</button>
          <button class="erp-tab" type="button">财务确认</button>
        </div>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
            <h3>${buyer.name}的今日账户处理表</h3>
              <p>当前用历史账户底表兜底展示；正式链路应由内置浏览器自动采集千川后台后生成。</p>
            </div>
            <div class="erp-batch-actions">
              <button class="mini-button" type="button">标记已看</button>
              <button class="mini-button" type="button">转剪辑</button>
              <button class="mini-button" type="button">写入日报</button>
            </div>
          </div>
          ${renderBuyerERPTable(workRows)}
        </section>
      </section>

      <aside class="shooter-rail">
        <section class="rail-panel">
          <div class="rail-title">
            <strong>今天先做</strong>
            <span>${buyer.name}</span>
          </div>
          <div class="rail-task-list">
            <div class="rail-task danger"><strong>账户异常</strong><span>${abnormalRows.length} 个需要先核对状态</span></div>
            <div class="rail-task warning"><strong>充值检查</strong><span>${rechargeRows.length} 个余额低于 1000</span></div>
            <div class="rail-task"><strong>卡审转剪辑</strong><span>采集到卡审失败后同步推送给投手和剪辑</span></div>
            <div class="rail-task"><strong>ROI 调控</strong><span>内置浏览器逐账户采集后自动生成</span></div>
          </div>
        </section>

        <section class="rail-panel">
          <div class="rail-title">
            <strong>业务流转</strong>
            <span>员工动作链路</span>
          </div>
          <div class="process-list">
            ${processRows
              .map(
                ([title, detail, status], index) => `
                  <div class="process-row">
                    <em>${index + 1}</em>
                    <div><strong>${title}</strong><span>${detail}</span></div>
                    <small>${status}</small>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="rail-panel">
          <div class="rail-title">
            <strong>数据同步</strong>
            <span>自动采集优先</span>
          </div>
          <div class="sync-list">
            ${pendingSyncRows
              .map(
                ([name, source, status]) => `
                  <div class="sync-row">
                    <div><strong>${name}</strong><span>${source}</span></div>
                    <em>${status}</em>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="rail-panel">
          <div class="rail-title">
            <strong>后台工作区</strong>
            <span>打开即采集</span>
          </div>
          <div class="browser-lite">
            <i data-lucide="monitor-up"></i>
            <div>
              <strong>${activeBrowserAccountKey ? "已选择账户" : "未选择账户"}</strong>
              <span>${activeBrowserAccountKey ? "准备打开并采集千川后台" : "从表格点击打开后台，未来自动截图识别"}</span>
            </div>
          </div>
        </section>
      </aside>
    </div>
  `;
}

function renderAIImages() {
  chartArea.innerHTML = `
    <div class="image-production-shell">
      <section class="image-flow-panel">
        <div class="section-title">
          <i data-lucide="workflow"></i>
          <h3>图片审核及制作流程</h3>
        </div>
        <div class="image-production-steps">
          ${imageProductionSteps
            .map(
              (item) => `
                <article class="image-step-card">
                  <div class="image-step-top">
                    <i data-lucide="${item.icon}"></i>
                    <span>${item.status}</span>
                  </div>
                  <strong>${item.title}</strong>
                  <p>${item.detail}</p>
                  <button class="mini-button" type="button">${item.action}</button>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="image-flow-panel">
        <div class="section-title">
          <i data-lucide="shield-alert"></i>
          <h3>审核规则来源</h3>
        </div>
        <div class="compliance-source">
          <strong>beauty-compliance-audit skill</strong>
          <span>先按美妆个护口径做硬规则兜底，再做语义补抓；审核通过后才允许进入 OpenAI Imagine 生图。</span>
        </div>
        <div class="compliance-rule-grid">
          ${complianceRuleRows
            .map(
              ([category, level, detail]) => `
                <article class="compliance-rule-card">
                  <div>
                    <strong>${category}</strong>
                    <span>${level}</span>
                  </div>
                  <p>${detail}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="image-flow-panel">
        <div class="section-title">
          <i data-lucide="image"></i>
          <h3>生成产出</h3>
        </div>
        <div class="image-output-grid">
          ${imageOutputRows
          .map(
            ([title, status, detail]) => `
              <article class="image-output-card">
                <div>
                  <strong>${title}</strong>
                  <span>${status}</span>
                </div>
                <p>${detail}</p>
              </article>
            `,
          )
          .join("")}
        </div>
      </section>

      <section class="image-flow-panel">
        <div class="section-title">
          <i data-lucide="route"></i>
          <h3>状态流转</h3>
        </div>
        <div class="image-status-flow">
          <div><strong>待审核</strong><span>上传图片/文案/架构表</span></div>
          <i data-lucide="arrow-right"></i>
          <div><strong>审核通过</strong><span>生成合规提示词</span></div>
          <i data-lucide="arrow-right"></i>
          <div><strong>OpenAI Imagine</strong><span>生成图片</span></div>
          <i data-lucide="arrow-right"></i>
          <div><strong>可引用</strong><span>投手/剪辑使用</span></div>
        </div>
      </section>
    </div>
    <div class="action-strip">
      <button class="quick-action" type="button"><i data-lucide="upload-cloud"></i> 上传审核材料</button>
      <button class="quick-action" type="button"><i data-lucide="shield-check"></i> 运行合规审核</button>
      <button class="quick-action" type="button"><i data-lucide="sparkles"></i> 审核通过后生图</button>
      <button class="quick-action" type="button"><i data-lucide="download"></i> 导出成品图片</button>
    </div>
  `;
}

function renderEditorDesk() {
  chartArea.innerHTML = `
    <div class="account-board">
      ${editorRows
        .map(
          ([task, owner, issue, action, button]) => `
            <article class="account-card">
              <div>
                <strong>${task}</strong>
                <span>${owner}</span>
              </div>
              <div class="issue-tag">${issue}</div>
              <p>${action}</p>
              <button class="mini-button" type="button">${button}</button>
            </article>
          `,
        )
        .join("")}
    </div>
    <div class="action-strip">
      <button class="quick-action" type="button"><i data-lucide="list-checks"></i> 领取精剪任务</button>
      <button class="quick-action" type="button"><i data-lucide="upload-cloud"></i> 上传创新素材库</button>
      <button class="quick-action" type="button"><i data-lucide="message-square-warning"></i> 处理投手反馈</button>
      <button class="quick-action" type="button"><i data-lucide="camera"></i> 提交拍摄素材</button>
    </div>
  `;
}

function renderFinance() {
  chartArea.innerHTML = `
    <div class="account-board">
      ${financeRows
        .map(
          ([area, owner, issue, action, button]) => `
            <article class="account-card">
              <div>
                <strong>${area}</strong>
                <span>${owner}</span>
              </div>
              <div class="issue-tag">${issue}</div>
              <p>${action}</p>
              <button class="mini-button" type="button">${button}</button>
            </article>
          `,
        )
        .join("")}
    </div>
    <div class="action-strip">
      <button class="quick-action" type="button"><i data-lucide="table-properties"></i> 导入台账数据</button>
      <button class="quick-action" type="button"><i data-lucide="bell-ring"></i> 设置充值提醒</button>
      <button class="quick-action" type="button"><i data-lucide="receipt-text"></i> 核对发票金额</button>
      <button class="quick-action" type="button"><i data-lucide="send"></i> 通知投手处理</button>
    </div>
  `;
}

function renderBackendData() {
  const connectedCount = dataSourceRows.filter((item) => item.status.includes("已") || item.status.includes("可读") || item.status.includes("访问")).length;
  const pendingInterfaceCount = dataSourceRows.filter((item) => item.platform === "飞书").length;
  chartArea.innerHTML = `
    <div class="integration-overview">
      <article>
        <span>正式数据源</span>
        <strong>${dataSourceRows.length}</strong>
        <small>飞书文档 + WPS 在线表格</small>
      </article>
      <article>
        <span>已接入</span>
        <strong>${connectedCount}</strong>
        <small>WPS 真实数据 + 飞书已访问</small>
      </article>
      <article>
        <span>待接口</span>
        <strong>${pendingInterfaceCount}</strong>
        <small>飞书全量行数据 / 定时同步</small>
      </article>
      <article>
        <span>标准底表</span>
        <strong>4</strong>
        <small>账户 / 商品卡 / 切片 / 异常</small>
      </article>
    </div>
    <div class="data-source-grid">
      ${dataSourceRows
        .map(
          (item) => `
            <article class="data-source-card">
              <div class="source-top">
                <span class="source-platform">${item.platform}</span>
                <span class="status-pill small">${item.status}</span>
              </div>
              <h3>${item.name}</h3>
              <p>${item.feeds}</p>
              <p>同步方式：${item.sync}</p>
              <div class="field-list">
                ${item.fields.map((field) => `<span>${field}</span>`).join("")}
              </div>
              <div class="source-bottom">
                <span>${item.owner} -> ${item.targetTable}</span>
                <button class="mini-button" type="button">${item.next}</button>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
    <div class="source-map">
      <div>
        <strong>接入原则</strong>
        <p>不要求员工换工具重填数据，系统先吃掉现有飞书文档和 WPS 表格，再沉淀成统一业务底表。</p>
      </div>
      <div>
        <strong>当前进度</strong>
        <p>WPS 千川账户登记表已生成投手账户底表；飞书文件夹和台账已可访问，下一步接下载/接口能力拿全量行数据。</p>
      </div>
    </div>
    <div class="feishu-source-panel">
      <div class="panel-header compact">
        <h2>飞书已读取内容</h2>
        <span class="status-pill small">${feishuSources.folders.length} 个文件夹 / ${feishuSources.tables.length} 张表</span>
      </div>
      <div class="feishu-source-grid">
        ${feishuSources.tables
          .map(
            (item) => `
              <article class="feishu-source-card">
                <span>${item.type}</span>
                <strong>${item.name}</strong>
                <p>${item.systemTarget}</p>
                <div class="field-list">
                  ${item.visibleFields.map((field) => `<span>${field}</span>`).join("")}
                </div>
                <small>${item.status}${item.visibleRows !== undefined ? ` / 可见记录 ${item.visibleRows}` : ""}</small>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
    <div class="mapping-table">
      <div class="mapping-row header">
        <div>原始数据源</div>
        <div>原始字段</div>
        <div>系统落点</div>
        <div>状态</div>
      </div>
      ${fieldMappingRows
        .map(
          ([source, rawField, target, status]) => `
            <div class="mapping-row">
              <div>${source}</div>
              <div>${rawField}</div>
              <div>${target}</div>
              <div><span class="status-pill small">${status}</span></div>
            </div>
          `,
        )
        .join("")}
    </div>
    <div class="sync-rule-grid">
      ${syncRuleRows
        .map(
          ([priority, source, rule, target, status]) => `
            <article class="sync-rule-card">
              <span>${priority}</span>
              <strong>${source}</strong>
              <p>${rule}</p>
              <small>${target}</small>
              <div class="status-pill small">${status}</div>
            </article>
          `,
        )
        .join("")}
    </div>
    <div class="action-strip">
      <button class="quick-action" type="button"><i data-lucide="key-round"></i> 接飞书接口</button>
      <button class="quick-action" type="button"><i data-lucide="file-spreadsheet"></i> 配置 WPS 表格</button>
      <button class="quick-action" type="button"><i data-lucide="git-branch"></i> 保存字段映射</button>
      <button class="quick-action" type="button"><i data-lucide="refresh-cw"></i> 手动同步</button>
    </div>
  `;
}

function renderMetrics() {
  if (!metricGrid) {
    return;
  }

  if (activeModuleId === "buyerDesk") {
    const buyer = getActiveBuyer();
    const rows = getBuyerRows(buyer.name);
    const abnormalRows = getAbnormalRows(rows);
    const rechargeRows = getRechargeRows(rows);
    const stats = getBuyerStats(buyer.name);
    if (topbarAlertButton) {
      topbarAlertButton.innerHTML = `<i data-lucide="bell"></i>${abnormalRows.length} 个账户异常`;
    }
    metricGrid.innerHTML = `
      <article class="metric-card">
        <span>账户异常</span>
        <strong>${abnormalRows.length}</strong>
        <small class="${abnormalRows.length ? "down" : "up"}">${buyer.name} 今日先处理</small>
      </article>
      <article class="metric-card">
        <span>今日待充值</span>
        <strong>${rechargeRows.length}</strong>
        <small>余额低于 1000 的真实账户</small>
      </article>
      <article class="metric-card">
        <span>昨日 ROI 异常</span>
        <strong>待接</strong>
        <small>不编假数据，等千川日报接入</small>
      </article>
      <article class="metric-card">
        <span>我的账户</span>
        <strong>${stats.rows.length}</strong>
        <small>商品卡 ${stats.productCount} / 切片 ${stats.sliceCount}</small>
      </article>
    `;
    return;
  }

  if (topbarAlertButton) {
    topbarAlertButton.innerHTML = `<i data-lucide="bell"></i>待接入提醒`;
  }

  metricGrid.innerHTML = `
    <article class="metric-card">
      <span>投手待调账户</span>
      <strong>待接</strong>
      <small>等待千川日报接入</small>
    </article>
    <article class="metric-card">
      <span>剪辑待交付</span>
      <strong>待接</strong>
      <small>等待任务表接入</small>
    </article>
    <article class="metric-card">
      <span>卡审素材</span>
      <strong>待接</strong>
      <small>等待素材审核结果接入</small>
    </article>
    <article class="metric-card">
      <span>台账核算</span>
      <strong>待接</strong>
      <small>等待财务台账自动化接入</small>
    </article>
  `;
}

function renderTodos() {
  if (activeModuleId === "buyerDesk") {
    const buyer = getActiveBuyer();
    const rows = getBuyerRows(buyer.name);
    const abnormalRows = getAbnormalRows(rows);
    const rechargeRows = getRechargeRows(rows);
    todoList.innerHTML = [
      [`先处理账户异常`, `${buyer.name} / ${abnormalRows.length} 个真实账户异常或待补`],
      [`确认今日充值`, `${buyer.name} / ${rechargeRows.length} 个低余额账户需确认`],
      [`卡审素材转剪辑`, `素材数据待接入；当前先跑转交流程`],
      [`账户调整`, `昨日 ROI 接入后生成待调计划，不在这里编假数`],
      [`发票台账`, `只处理待确认异常，完整台账进财务模块`],
    ]
      .map(
        ([title, detail]) => `
          <div class="todo-item">
            <strong>${title}</strong>
            <span>${detail}</span>
          </div>
        `,
      )
      .join("");
    return;
  }

  todoList.innerHTML = todos
    .map(
      ([title, detail]) => `
        <div class="todo-item">
          <strong>${title}</strong>
          <span>${detail}</span>
        </div>
      `,
    )
    .join("");
}

function renderTable() {
  if (tablePanel) {
    tablePanel.classList.toggle("hidden", activeModuleId === "buyerDesk");
  }

  if (activeModuleId === "buyerDesk") {
    operationTable.innerHTML = "";
    return;
  }

  const rows = modules.filter((item) => activeFilter === "all" || priorityKey(item.priority) === activeFilter);

  operationTable.innerHTML = `
    <div class="table-row header">
      <div class="table-cell">模块</div>
      <div class="table-cell">负责人</div>
      <div class="table-cell">优先级</div>
      <div class="table-cell">当前状态</div>
      <div class="table-cell">下一步</div>
    </div>
    ${rows
      .map(
        (item) => `
          <div class="table-row">
            <div class="table-cell"><strong>${item.title}</strong></div>
            <div class="table-cell">${item.owner}</div>
            <div class="table-cell">${item.priority}</div>
            <div class="table-cell">${item.status}</div>
            <div class="table-cell muted">${item.actions ? item.actions.join(" / ") : item.next}</div>
          </div>
        `,
      )
      .join("")}
  `;
}

function renderDetails() {
  const item = getActiveModule();
  pageTitle.textContent = item.title;
  moduleTitle.textContent = item.title;
  moduleDescription.textContent = item.description;
  moduleStatus.textContent = item.status;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function render() {
  document.body.classList.toggle("electron-shell", isElectronShell);
  document.body.classList.add("commercial-admin-mode");
  document.body.classList.toggle("buyer-erp-mode", activeModuleId === "buyerDesk");
  renderNav();
  renderMetrics();
  if (activeModuleId === "buyerDesk") {
    renderBuyerDesk();
  } else if (activeModuleId === "editorDesk") {
    renderEditorDesk();
  } else if (activeModuleId === "finance") {
    renderFinance();
  } else if (activeModuleId === "aiImages") {
    renderAIImages();
  } else if (activeModuleId === "backendData") {
    renderBackendData();
  } else {
    renderCards();
  }
  renderTodos();
  renderTable();
  renderDetails();
  refreshIcons();
}

function showErp() {
  loginView.classList.add("hidden");
  erpView.classList.remove("hidden");
  render();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  showErp();
});

document.addEventListener("click", (event) => {
  const moduleTarget = event.target.closest("[data-module]");
  if (moduleTarget) {
    activeModuleId = moduleTarget.dataset.module;
    render();
    return;
  }

  const buyerTarget = event.target.closest("[data-buyer]");
  if (buyerTarget) {
    activeBuyerId = buyerTarget.dataset.buyer;
    activeBrowserAccountKey = "";
    render();
    return;
  }

  const accountTarget = event.target.closest("[data-open-account]");
  if (accountTarget) {
    activeBrowserAccountKey = accountTarget.dataset.openAccount;
    render();
    return;
  }

  const filterTarget = event.target.closest("[data-filter]");
  if (filterTarget) {
    activeFilter = filterTarget.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.remove("active"));
    filterTarget.classList.add("active");
    renderCards();
    renderTable();
    refreshIcons();
  }
});

refreshIcons();
