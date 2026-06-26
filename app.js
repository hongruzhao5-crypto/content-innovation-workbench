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
    title: "AI 生图",
    nav: "AI 生图",
    icon: "sparkles",
    priority: "P1",
    status: "占位框架",
    description: "独立承载商品主图、场景图、对比图、封面图、待审核 AI 图、生成记录和可引用状态，不混入投手项目列。",
    owner: "投手组 / 剪辑组",
    next: "先建立分类、审核、引用状态框架",
    actions: ["商品主图", "场景图", "对比图", "封面图", "审核 AI 图", "查看生成记录"],
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
    description: "把飞书文档和 WPS 在线表格作为正式数据源，无缝同步到投手、财务、报表和经营驾驶舱。",
    owner: "系统 / 运营",
    next: "完成飞书授权和字段映射",
    actions: ["接飞书接口", "配置 WPS", "映射字段", "同步到底表"],
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

const aiImageBuckets = [
  ["商品主图", "image", "商品卡与投放入口可引用的主图池。"],
  ["场景图", "panel-top", "按产品场景、使用人群、卖点表达沉淀。"],
  ["对比图", "columns-3", "用于功效、成分、前后对比的图像框架。"],
  ["封面图", "rectangle-horizontal", "短视频、切片、素材封面图入口。"],
  ["待审核 AI 图", "scan-eye", "生成后先审核，再开放给投手和剪辑引用。"],
  ["生成记录", "history", "记录提示词、来源产品、生成时间和审核状态。"],
];

const aiImageReferenceRows = [
  ["投手可引用", "待接入", "商品主图 / 对比图 / 卡审素材补图"],
  ["剪辑可引用", "待接入", "封面图 / 场景图 / 短视频画面素材"],
  ["审核状态", "占位", "待审核 / 可用 / 驳回 / 已引用"],
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
    name: "抖音千川账户登记表3.13",
    platform: "WPS / 金山文档",
    status: "已读取 99 条",
    owner: "投手组 / 财务",
    sync: "当前下载文件 / 后续在线同步",
    feeds: "投手工作台 / 账户中心 / 财务模块",
    fields: ["账号名", "登记人", "项目", "商品卡/切片", "充值", "开票"],
    targetTable: "投手账户底表",
    next: "已按登记人和项目生成投手账户底表",
  },
];

const fieldMappingRows = [
  ["WPS 千川账户登记表", "登记人", "投手账户底表.投手", "已映射"],
  ["WPS 千川账户登记表", "项目", "投手账户底表.账户类型", "已映射"],
  ["WPS 千川账户登记表", "账号名 / 账户ID", "投手账户底表.账户", "已映射"],
  ["WPS 千川账户登记表", "账户状态 / 余额 / 备注", "投手工作台.异常提示", "已映射"],
  ["飞书 商品卡核算", "核算批次 / 店铺明细JSON / 核算时间 / GSV ROI", "商品卡核算表", "已识别"],
  ["飞书 切片核算", "源文件 / 核算结果 / 运营人业绩 / 达人业绩", "切片核算表", "已识别"],
  ["飞书 璟美空间检查分析", "文件夹 / 总控看板 / 周报监控表", "异常检查表", "已识别"],
];

const syncRuleRows = [
  ["P0", "WPS 千川账户登记表", "手动下载更新", "投手账户底表", "已接入"],
  ["P1", "飞书 商品卡核算", "每日 9:30 同步", "商品卡日报 / 财务台账", "待接口"],
  ["P1", "飞书 切片核算", "每日 9:30 同步", "切片日报 / 财务台账", "待接口"],
  ["P2", "飞书 璟美空间检查分析", "每 2 小时同步", "异常中心 / 驾驶舱", "待接口"],
];

let activeModuleId = "buyerDesk";
let activeFilter = "all";
let activeBuyerId = "liuxiuting";
const realAccountRows = Array.isArray(window.realAccountRows) ? window.realAccountRows : [];
const feishuSources = window.feishuSourceRows || { folders: [], tables: [] };

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
        <div class="work-row">
          <div>
            <strong>${formatAccountName(row)}</strong>
            <span>${row.账户类型} / 余额 ${formatMoney(row.余额)} / ${row.账户状态}</span>
          </div>
          <div class="issue-tag">${row.今日异常}</div>
          <button class="mini-button" type="button">处理</button>
        </div>
      `,
    )
    .join("");
}

function renderBuyerDesk() {
  const buyer = getActiveBuyer();
  const rows = getBuyerRows(buyer.name);
  const stats = getBuyerStats(buyer.name);
  const abnormalRows = getAbnormalRows(rows);
  const rechargeRows = getRechargeRows(rows);
  const actionRows = uniqueRows([...abnormalRows, ...rechargeRows]).slice(0, 10);
  chartArea.innerHTML = `
    <div class="buyer-desk-shell">
      <div class="work-start-header">
        <div>
          <span>我的今日工作台</span>
          <h3>${buyer.name}</h3>
          <p>${buyer.today}</p>
        </div>
        <div class="account-stats compact">
          <span>真实账户 ${stats.rows.length}</span>
          <span>商品卡 ${stats.productCount}</span>
          <span>切片 ${stats.sliceCount}</span>
          <span>异常/待补 ${stats.abnormalCount}</span>
        </div>
      </div>

      <div class="work-queue-grid">
        ${renderWorkQueueCard({
          title: "账户异常",
          icon: "alert-triangle",
          count: abnormalRows.length,
          meta: "来自 WPS 千川账户登记表",
          detail: "先处理异常、待注销、状态不清或备注待补的账户。",
          button: "查看异常",
          tone: abnormalRows.length ? "urgent" : "",
        })}
        ${renderWorkQueueCard({
          title: "今日待充值",
          icon: "wallet",
          count: rechargeRows.length,
          meta: "按余额低于 1000 初筛",
          detail: "余额低的账户先确认是否需要充值、是否到账、是否影响投放。",
          button: "处理充值",
          tone: rechargeRows.length ? "urgent" : "",
        })}
        ${renderWorkQueueCard({
          title: "昨日 ROI 异常",
          icon: "line-chart",
          count: "待接",
          meta: "等待千川日报 / 飞书核算接入",
          detail: "这里不编假数据；接入昨日投放数据后直接生成待调计划。",
          button: "看接入状态",
        })}
        ${renderWorkQueueCard({
          title: "我的今日任务",
          icon: "list-checks",
          count: buyerDailyActions.length,
          meta: "按投手每日真实动作整理",
          detail: "充值、上传、卡审、调控、素材分析、评论处理。",
          button: "开始处理",
        })}
      </div>

      <div class="work-main-grid">
        <section class="work-panel">
          <div class="section-title">
            <i data-lucide="badge-check"></i>
            <h3>卡审素材转剪辑</h3>
          </div>
          <div class="handoff-flow">
            <div><strong>卡审不过</strong><span>待接素材审核结果</span></div>
            <i data-lucide="arrow-right"></i>
            <div><strong>转给剪辑</strong><span>按商品 / 账户 / 素材自动分派</span></div>
            <i data-lucide="arrow-right"></i>
            <div><strong>剪辑返回</strong><span>重新提审或上传账户</span></div>
          </div>
          <div class="handoff-list">
            <div class="handoff-row">
              <strong>商品卡素材</strong>
              <span>待接卡审素材数据；当前只保留转交流程入口</span>
              <button class="mini-button" type="button">转给剪辑</button>
            </div>
            <div class="handoff-row">
              <strong>切片素材</strong>
              <span>待接达人/切片素材审核结果；不在这里编造素材数</span>
              <button class="mini-button" type="button">转给剪辑</button>
            </div>
          </div>
        </section>

        <section class="work-panel">
          <div class="section-title">
            <i data-lucide="sliders-horizontal"></i>
            <h3>账户调整队列</h3>
          </div>
          <div class="work-list">
            ${renderWorkRows(actionRows, "当前没有从真实账户表筛出的异常/低余额账户。接入昨日 ROI 后，这里会变成待调整计划队列。")}
          </div>
        </section>
      </div>

      <div class="work-main-grid lower">
        <section class="work-panel">
          <div class="section-title">
            <i data-lucide="folder-kanban"></i>
            <h3>项目入口</h3>
          </div>
          <div class="project-entry-grid">
            ${buyerProjectRows
              .map(
                (item) => `
                  <button class="project-entry" type="button">
                    <i data-lucide="${item.icon}"></i>
                    <strong>${item.title}</strong>
                    <span>${item.target}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="work-panel">
          <div class="section-title">
            <i data-lucide="receipt-text"></i>
            <h3>发票台账待确认</h3>
          </div>
          <div class="automation-note">
            <strong>这里不让员工重复填台账。</strong>
            <span>完整台账留在财务模块；投手只处理充值、发票、挂账里需要人工确认的异常。</span>
          </div>
        </section>
      </div>

      <div class="action-strip">
        <button class="quick-action" type="button"><i data-lucide="alert-triangle"></i> 处理异常</button>
        <button class="quick-action" type="button"><i data-lucide="wallet"></i> 处理充值</button>
        <button class="quick-action" type="button"><i data-lucide="badge-check"></i> 卡审转剪辑</button>
        <button class="quick-action" type="button"><i data-lucide="sliders-horizontal"></i> 调整账户</button>
      </div>
    </div>
  `;
}

function renderAIImages() {
  chartArea.innerHTML = `
    <div class="ai-image-layout">
      <div class="ai-image-grid">
        ${aiImageBuckets
          .map(
            ([title, icon, detail]) => `
              <article class="ai-image-card">
                <div>
                  <i data-lucide="${icon}"></i>
                  <strong>${title}</strong>
                </div>
                <p>${detail}</p>
                <button class="mini-button" type="button">进入占位</button>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="reference-status-panel">
        <div class="section-title">
          <i data-lucide="link-2"></i>
          <h3>投手 / 剪辑可引用状态</h3>
        </div>
        <div class="reference-status-list">
          ${aiImageReferenceRows
            .map(
              ([name, status, detail]) => `
                <div class="reference-row">
                  <strong>${name}</strong>
                  <span>${detail}</span>
                  <em>${status}</em>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </div>
    <div class="action-strip">
      <button class="quick-action" type="button"><i data-lucide="image-plus"></i> 新增生成需求</button>
      <button class="quick-action" type="button"><i data-lucide="scan-eye"></i> 审核 AI 图</button>
      <button class="quick-action" type="button"><i data-lucide="history"></i> 查看生成记录</button>
      <button class="quick-action" type="button"><i data-lucide="link-2"></i> 管理引用状态</button>
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
