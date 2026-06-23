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
    title: "后台数据源",
    nav: "后台",
    icon: "database-zap",
    priority: "P0",
    status: "新增",
    description: "承载飞书表格、商品卡核算、切片核算和 WPS 千川账户登记表，先把真实数据源映射到工作台。",
    owner: "系统 / 运营",
    next: "补齐表头和字段映射",
    actions: ["登记数据源", "检查表头", "映射字段", "同步到工作台"],
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
    status: "待接入",
    owner: "运营后台",
    feeds: "管理驾驶舱 / 投手工作台 / 素材中心",
    fields: ["检查类型", "账号/素材", "异常项", "负责人", "处理状态"],
    next: "进入飞书璟美空间，整理各类检查分析表表头",
  },
  {
    name: "商品卡核算",
    platform: "飞书",
    status: "待接入",
    owner: "商品卡投手",
    feeds: "商品卡中心 / 财务模块 / 数据报表",
    fields: ["日期", "账户名", "登记人", "收入", "成本", "利润", "异常"],
    next: "确认商品卡核算表字段和日报口径",
  },
  {
    name: "切片核算",
    platform: "飞书",
    status: "待接入",
    owner: "切片投手",
    feeds: "切片中心 / 财务模块 / 数据报表",
    fields: ["日期", "达人/账户", "登记人", "消耗", "佣金", "挂账", "异常"],
    next: "确认切片核算表字段和挂账口径",
  },
  {
    name: "抖音千川账户登记表3.13",
    platform: "WPS / 金山文档",
    status: "链接已登记",
    owner: "投手组 / 财务",
    feeds: "投手工作台 / 账户中心 / 财务模块",
    fields: ["账号名", "登记人", "项目", "商品卡/切片", "充值", "开票"],
    next: "按账号名、登记人、项目拆成投手账户底表",
  },
];

let activeModuleId = "buyerDesk";
let activeFilter = "all";
let activeBuyerId = "liuxiuting";

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

function renderAccountCards(rows, owner) {
  return rows
    .map(
      ([account, issue, action, button]) => `
        <article class="account-card">
          <div>
            <strong>${account}</strong>
            <span>${owner}</span>
          </div>
          <div class="issue-tag">${issue}</div>
          <p>${action}</p>
          <button class="mini-button" type="button">${button}</button>
        </article>
      `,
    )
    .join("");
}

function renderBuyerDesk() {
  const buyer = getActiveBuyer();
  chartArea.innerHTML = `
    <div class="buyer-desk-shell">
      <div class="buyer-switch">
        ${buyerProfiles
          .map(
            (item) => `
              <button class="buyer-tab ${item.id === activeBuyerId ? "active" : ""}" type="button" data-buyer="${item.id}">
                <strong>${item.name}</strong>
                <span>${item.role}</span>
              </button>
            `,
          )
          .join("")}
      </div>

      <div class="desk-summary">
        <div>
          <span>当前投手</span>
          <strong>${buyer.name}</strong>
        </div>
        <p>${buyer.today}</p>
      </div>

      <div class="account-section">
        <div class="section-title">
          <i data-lucide="shopping-bag"></i>
          <h3>商品卡账户</h3>
        </div>
        <div class="account-board compact-board">
          ${renderAccountCards(buyer.productAccounts, buyer.name)}
        </div>
      </div>

      <div class="account-section">
        <div class="section-title">
          <i data-lucide="clapperboard"></i>
          <h3>切片账户</h3>
        </div>
        <div class="account-board compact-board">
          ${renderAccountCards(buyer.sliceAccounts, buyer.name)}
        </div>
      </div>
    </div>
    <div class="action-strip">
      <button class="quick-action" type="button"><i data-lucide="external-link"></i> 打开当前账户</button>
      <button class="quick-action" type="button"><i data-lucide="edit-3"></i> 记录账户调整</button>
      <button class="quick-action" type="button"><i data-lucide="alert-triangle"></i> 处理卡审/低质搬运</button>
      <button class="quick-action" type="button"><i data-lucide="wallet"></i> 跟进充值开票</button>
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
  chartArea.innerHTML = `
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
              <div class="field-list">
                ${item.fields.map((field) => `<span>${field}</span>`).join("")}
              </div>
              <div class="source-bottom">
                <span>${item.owner}</span>
                <button class="mini-button" type="button">${item.next}</button>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
    <div class="source-map">
      <div>
        <strong>接入判断</strong>
        <p>后台不是另一个看板，它负责把飞书和 WPS 的真实表格变成投手、财务、报表都能共用的账户底表。</p>
      </div>
      <div>
        <strong>第一张底表</strong>
        <p>先从 WPS 千川账户登记表抽出账号名、登记人、项目，生成投手账户表，再接商品卡核算和切片核算。</p>
      </div>
    </div>
    <div class="action-strip">
      <button class="quick-action" type="button"><i data-lucide="file-spreadsheet"></i> 录入表格链接</button>
      <button class="quick-action" type="button"><i data-lucide="list-tree"></i> 检查字段表头</button>
      <button class="quick-action" type="button"><i data-lucide="git-branch"></i> 建立字段映射</button>
      <button class="quick-action" type="button"><i data-lucide="refresh-cw"></i> 同步工作台</button>
    </div>
  `;
}

function renderTodos() {
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
  if (activeModuleId === "buyerDesk") {
    renderBuyerDesk();
  } else if (activeModuleId === "editorDesk") {
    renderEditorDesk();
  } else if (activeModuleId === "finance") {
    renderFinance();
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
