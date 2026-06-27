const modules = [
  {
    id: "cockpit",
    title: "管理驾驶舱",
    nav: "驾驶舱",
    icon: "gauge",
    priority: "P0",
    status: "管理视角",
    description: "管理者查看月度数据、昨日数据、员工工作量、工作内容、完成进度和需要干预的异常。",
    owner: "管理者",
    group: "经营总览",
    next: "接入自动采集后的经营与人员进度数据",
    actions: ["查看月度经营", "查看昨日数据", "查看员工进度", "处理异常"],
  },
  {
    id: "buyerDesk",
    title: "投手今日作战台",
    nav: "投手",
    icon: "target",
    priority: "P0",
    status: "首页",
    description: "投手每天的主入口，集中处理待调账户、素材审核、卡审反馈、低质搬运、台账核算和充值开票。",
    owner: "投手组",
    group: "一线工作台",
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
    description: "剪辑每天的主入口，只处理卡审修改、素材剪辑数量、绿联云盘上传进度和按素材命名归因的销售额。",
    owner: "剪辑组",
    group: "一线工作台",
    next: "接入绿联云盘和剪映入口",
    actions: ["处理卡审修改", "领取剪辑数量", "上传绿联云盘", "查看销售归因"],
  },
  {
    id: "materials",
    title: "素材中心",
    nav: "素材",
    icon: "image",
    priority: "P0",
    status: "历史素材库",
    description: "展示历史素材、文件夹、人员归档和绿联云盘分类，方便按人、项目、素材类型追溯和复用。",
    owner: "剪辑组 / 投手组",
    group: "业务资产",
    next: "接入绿联云盘文件夹、文件数、上传人和素材标签",
    actions: ["查看历史素材", "按人筛选", "查看文件夹", "同步绿联云盘"],
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
    group: "业务资产",
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
    description: "承载充值、发票、物料购买、账户购买、刷粉数量和相关费用确认。",
    owner: "投手组 / 财务",
    group: "经营总览",
    next: "建立费用类历史记录和待确认提醒",
    actions: ["充值确认", "发票对账", "物料购买", "账户购买", "刷粉数量"],
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
    group: "一线工作台",
    next: "接入 beauty-compliance-audit 审核规则，再接 OpenAI Imagine 生成链路",
    actions: ["上传审核", "违规改写", "通过后生图", "产出图片", "引用记录"],
  },
  {
    id: "reports",
    title: "数据报表",
    nav: "报表",
    icon: "bar-chart-3",
    priority: "P0",
    status: "账务集合地",
    description: "承载财务里所有账：收入、支出、报销、物料、账户购买、刷粉、投流等系统内记录，并预留云端同步到飞书。",
    owner: "管理者 / 财务",
    group: "经营总览",
    next: "建立系统内记录库，再同步到飞书表格/多维表",
    actions: ["录入账务", "查询历史", "汇总收支", "同步飞书"],
  },
  {
    id: "automation",
    title: "自动化中心",
    nav: "自动化",
    icon: "workflow",
    priority: "P1",
    status: "运行控制台",
    description: "承载自动采集、规则判断、任务派发、执行日志和失败人工接管；员工看任务结果，管理员看自动化运行状态。",
    owner: "系统",
    group: "自动化与数据",
    next: "先配置账户巡检、卡审转交、飞书同步和台账核算四条工作流",
    actions: ["查看工作流", "查看规则库", "重试失败任务", "人工接管"],
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
    group: "自动化与数据",
    next: "先打通内置浏览器采集规则，再补飞书/WPS字段映射",
    actions: ["打开后台采集", "截图识别", "抽取字段", "推送任务"],
  },
  {
    id: "system",
    title: "系统设置",
    nav: "设置",
    icon: "settings",
    priority: "P2",
    status: "管理员入口",
    description: "承接人员角色、权限范围、字段字典、通知策略、操作审计和系统参数，不作为员工日常工作台。",
    owner: "管理员",
    group: "管理配置",
    next: "先固化投手、剪辑、财务、管理者四类角色和通知策略",
    actions: ["配置人员", "配置权限", "字段字典", "通知策略"],
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

const editorProfiles = [
  { name: "罗沛", role: "剪辑组长", revise: 4, target: 18, uploaded: 11, sales: "待采集" },
  { name: "戴秀婷", role: "剪辑组员", revise: 3, target: 16, uploaded: 9, sales: "待采集" },
  { name: "周亮", role: "剪辑组员", revise: 2, target: 20, uploaded: 12, sales: "待采集" },
  { name: "邹泽敏", role: "剪辑组员", revise: 5, target: 16, uploaded: 8, sales: "待采集" },
];

const editorRevisionRows = [
  ["P0", "宝得娜切片素材_戴秀婷_0626_03", "功效表达过强", "刘秀厅", "戴秀婷", "待修改"],
  ["P0", "泰丽店商品卡_周亮_0626_07", "前后对比不清晰", "苑佳乐", "周亮", "待修改"],
  ["P1", "花本姿素材_邹泽敏_0626_02", "字幕卖点需弱化", "李树花", "邹泽敏", "修改中"],
  ["P1", "优蜜琳场景图_罗沛_0626_01", "封面图卡审驳回", "刘秀厅", "罗沛", "待复核"],
];

const editorProductionRows = [
  ["戴秀婷", "16", "9", "7", "绿联云盘/商品卡/戴秀婷", "上传中"],
  ["周亮", "20", "12", "8", "绿联云盘/切片/周亮", "上传中"],
  ["邹泽敏", "16", "8", "8", "绿联云盘/商品卡/邹泽敏", "待上传"],
  ["罗沛", "18", "11", "7", "绿联云盘/组长复核/罗沛", "待确认"],
];

const materialFolderRows = [
  ["绿联云盘/商品卡/历史素材", "商品卡", "刘秀厅 / 李树花", "待接", "主图、精剪、卡审问题"],
  ["绿联云盘/切片/达人素材", "切片", "苑佳乐 / 周亮", "待接", "达人素材、混剪、封面"],
  ["绿联云盘/剪辑组/戴秀婷", "人员归档", "戴秀婷", "待接", "卡审修改、精剪成片"],
  ["绿联云盘/剪辑组/邹泽敏", "人员归档", "邹泽敏", "待接", "拍摄素材、修改素材"],
  ["绿联云盘/产品拍摄/新包装", "拍摄素材", "罗沛", "待接", "牙膏、面膜、防晒"],
];

const materialHistoryRows = [
  ["2026-06-26 18:40", "宝得娜切片素材_戴秀婷_0626_03", "卡审修改", "戴秀婷", "待复审"],
  ["2026-06-26 17:15", "泰丽店商品卡_周亮_0626_07", "商品卡精剪", "周亮", "已上传绿联"],
  ["2026-06-26 16:20", "花本姿素材_邹泽敏_0626_02", "卡审修改", "邹泽敏", "修改中"],
  ["2026-06-26 15:05", "优蜜琳场景图_罗沛_0626_01", "封面图", "罗沛", "待投手复核"],
];

const cockpitMonthlyRows = [
  ["月度销售额", "待采集", "商品卡 + 切片后台自动汇总"],
  ["月度 ROI", "待采集", "千川账户逐账户采集后计算"],
  ["月度素材产出", "待接", "绿联云盘文件数 + 素材后台归档"],
  ["月度利润", "待同步", "商品卡 / 切片核算接入后生成"],
];

const cockpitYesterdayRows = [
  ["昨日销售额", "待采集", "按商品卡、切片拆分"],
  ["昨日消耗", "待采集", "千川账户后台自动采集"],
  ["昨日 ROI 异常", "待采集", "低于规则阈值自动标红"],
  ["昨日卡审失败", `${editorRevisionRows.length}`, "同步投手和剪辑处理"],
];

const cockpitEmployeeRows = [
  ["刘秀厅", "投手组长", "账户巡检、卡审复核、充值跟进", "账户异常 2 / 低余额 6", "待自动采集"],
  ["苑佳乐", "投手组员", "切片账户、挂账、卡审处理", "账户数据待采集", "待自动采集"],
  ["李树花", "投手组员", "商品卡账户、开票、充值更新", "账户数据待采集", "待自动采集"],
  ["罗沛", "剪辑组长", "卡审分配、剪辑进度确认", "11/18", "61%"],
  ["戴秀婷", "剪辑组员", "卡审修改、素材剪辑、绿联上传", "9/16", "56%"],
  ["周亮", "剪辑组员", "素材剪辑、绿联上传", "12/20", "60%"],
  ["邹泽敏", "剪辑组员", "卡审修改、素材剪辑、绿联上传", "8/16", "50%"],
];

const cockpitRiskRows = [
  ["P0", "账户状态采集未接", "投手任务仍靠历史底表兜底", "先做内置浏览器采集规则"],
  ["P0", "卡审修改积压", `${editorRevisionRows.length} 条卡审素材待剪辑处理`, "先让剪辑处理卡审修改"],
  ["P1", "绿联云盘未接", "剪辑上传进度暂不能自动确认", "接入路径/文件数/上传时间"],
  ["P1", "销售归因未接", "剪辑个人销售额待后台素材名采集", "按素材命名提取剪辑姓名"],
];

const financeRows = [
  ["充值确认", "千川账户余额 / 到账状态", "待自动采集", "低余额和充值到账需要投手确认，财务留痕。", "查看充值"],
  ["发票对账", "商品卡 / 切片发票", "3 张待核对", "核对开票金额、收票状态和异常差额。", "开始对账"],
  ["物料购买", "拍摄道具 / 产品样品 / 包材", "待登记", "记录素材生产相关物料购买、负责人、金额和用途。", "新增物料"],
  ["账户购买", "抖音号 / 达人号 / 第三方账户", "待登记", "记录账户购买来源、实名状态、绑定人和成本。", "新增账户"],
  ["刷粉数量", "新增账号 / 实名账号", "待确认", "记录刷粉账号、数量、费用、负责人和结果。", "记录刷粉"],
];

const financeHistoryRows = [
  ["2026-06-26", "物料购买", "牙膏新包装拍摄道具", "罗沛", "待补金额"],
  ["2026-06-26", "账户购买", "第三方千川账户对接", "刘秀厅", "待确认"],
  ["2026-06-25", "刷粉数量", "新增抖音账号实名刷粉", "刘秀厅", "待接数据"],
  ["2026-06-25", "充值确认", "切片账户低余额提醒", "苑佳乐", "待到账"],
];

const financeIncomeRows = [
  ["整体支付金额", "待采集", "卖货产生的支付金额"],
  ["有效收入金额", "待采集", "剔除退款、异常订单后的有效收入"],
];

const financeExpenseRows = [
  ["投流消耗", "待采集", "千川账户自动采集"],
  ["物料采买", "待登记", "拍摄道具、样品、包材"],
  ["账户购买", "待登记", "抖音号、达人号、第三方账户"],
  ["刷粉费用", "待确认", "账号刷粉数量与费用"],
  ["其他费用", "待登记", "临时采购、外包、工具订阅等"],
];

const accountCategoryRows = [
  ["千川账户", () => realAccountRows.filter((row) => row.账户ID).length, "投放后台账户"],
  ["商品卡账户", () => realAccountRows.filter((row) => row.账户类型 === "商品卡").length, "商品卡投放相关"],
  ["切片账户", () => realAccountRows.filter((row) => row.账户类型 === "切片").length, "达人/切片投放相关"],
  ["未归类账户", () => realAccountRows.filter((row) => row.账户类型 === "未归类").length, "源表字段待清理"],
];

const historyRows = [
  ["2026-06-27 10:42", "管理驾驶舱", "查看月度、昨日和员工进度", "系统", "已记录"],
  ["2026-06-26 20:58", "剪辑工作台", "新增卡审修改和绿联云盘进度", "系统", "已发布"],
  ["2026-06-26 20:31", "投手工作台", "确定内置浏览器自动采集优先", "系统", "已发布"],
  ["2026-06-26 19:45", "商业后台风格", "调整为内容业务中台", "系统", "已发布"],
];

const reportLedgerRows = [
  ["2026-06-27", "收入", "卖货收入-整体支付金额", "待采集", "系统采集", "待同步飞书", "收入台账.整体支付金额"],
  ["2026-06-27", "收入", "卖货收入-有效收入金额", "待采集", "系统采集", "待同步飞书", "收入台账.有效收入金额"],
  ["2026-06-27", "支出", "投流消耗", "待采集", "千川采集", "待同步飞书", "投流台账.千川消耗"],
  ["2026-06-26", "支出", "物料采买-拍摄道具", "待填写", "财务录入", "系统内暂存", "支出台账.物料采买"],
  ["2026-06-26", "支出", "账户购买-第三方账户", "待填写", "财务录入", "系统内暂存", "支出台账.账户购买"],
  ["2026-06-25", "支出", "刷粉费用-新增账号", "待填写", "财务录入", "系统内暂存", "支出台账.刷粉费用"],
  ["2026-06-25", "报销", "素材拍摄临时费用", "待填写", "员工提交", "系统内暂存", "报销台账.员工报销"],
];

const reportCategoryRows = [
  ["卖货收入", "收入", "待采集", "整体支付金额、有效收入金额"],
  ["投流消耗", "支出", "待采集", "千川账户自动采集"],
  ["物料采买", "支出", "待填写", "拍摄道具、样品、包材"],
  ["账户购买", "支出", "待填写", "抖音号、达人号、第三方账户"],
  ["刷粉费用", "支出", "待填写", "账号、数量、费用、负责人"],
  ["报销", "支出", "待填写", "员工报销、临时费用"],
  ["其他费用", "支出", "待填写", "工具、外包、杂项"],
];

const reportSyncRows = [
  ["收入台账", "卖货收入：支付金额 / 有效收入", "系统采集后入库", "飞书多维表", "待接接口"],
  ["支出台账", "投流、物料、账户购买、刷粉、其他费用", "系统录入 + 后台采集", "飞书表格", "待同步"],
  ["报销台账", "员工提交、财务复核、付款状态", "系统内审批记录", "飞书表格", "待同步"],
  ["投流台账", "千川消耗、账户归属、投手负责人", "内置浏览器采集", "飞书表格", "待接"],
];

const reportFeishuFieldRows = [
  ["系统账务ID", "record_id", "系统生成", "唯一追踪，不让飞书反向覆盖"],
  ["发生日期", "date", "系统填写 / 后台采集", "按日、月汇总"],
  ["账务类型", "category", "收入 / 支出 / 报销", "统一分类口径"],
  ["费用项目", "item", "投流 / 物料 / 账户 / 刷粉 / 其他", "用于月度费用结构"],
  ["金额状态", "amount_status", "待采集 / 待填写 / 已确认", "没有真实数据不填假数"],
  ["同步状态", "sync_status", "待同步 / 已同步 / 同步失败", "失败进入人工接管"],
];

const reportWorkflowRows = [
  ["1", "系统内记录", "员工只补充必要信息，收入和投流优先自动采集", "进行中"],
  ["2", "规则校验", "检查金额缺失、负责人缺失、分类冲突和重复记录", "待配置"],
  ["3", "同步飞书", "把已确认记录推到飞书表格 / 多维表用于共享备份", "待接口"],
  ["4", "失败接管", "同步失败、字段缺失、权限异常时生成财务待办", "待接"],
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

const automationWorkflowRows = [
  ["账户巡检", "内置浏览器 / 千川后台", "上班后自动 + 手动触发", "投手今日任务", "待接", "打开账户 -> 截图/OCR -> 识别余额/状态/ROI -> 生成任务"],
  ["卡审失败转交", "素材审核页 / 页面文本", "识别到卡审失败", "投手 + 剪辑任务", "待接", "抓取驳回原因 -> 匹配剪辑 -> 同步双方处理"],
  ["低余额充值提醒", "账户余额页", "余额低于阈值", "投手 / 财务", "待配置", "识别余额 -> 匹配负责人 -> 生成充值确认"],
  ["台账核算", "CSV / n8n / 飞书台账", "上传后触发", "数据报表 / 群通知", "待接口", "导入文件 -> 核算 -> 校验异常 -> 留存结果"],
  ["飞书账务同步", "系统账务库", "每日定时 + 手动同步", "飞书表格 / 多维表", "待接口", "字段校验 -> 写入飞书 -> 失败进入接管"],
];

const automationRuleRows = [
  ["账户规则", "低余额", "余额 < 阈值", "生成充值确认任务", "对应投手 / 财务", "待配置"],
  ["账户规则", "账户异常", "账户状态非正常", "生成账户核对任务", "对应投手", "待接"],
  ["投放规则", "ROI 异常", "昨日 ROI 低于阈值", "生成账户调控任务", "对应投手", "待接"],
  ["素材规则", "卡审失败", "审核状态=失败 / 出现驳回原因", "同步投手和对应剪辑", "投手 + 剪辑", "待接"],
  ["素材规则", "低质搬运", "命中低质搬运提示", "生成提审或删除任务", "对应投手", "待接"],
  ["同步规则", "飞书写入失败", "接口失败 / 字段缺失 / 权限异常", "生成财务接管任务", "财务 / 管理者", "待配置"],
];

const automationExecutionRows = [
  ["2026-06-27 09:30", "账户巡检", "待接", "0", "等待内置浏览器采集规则"],
  ["2026-06-27 09:35", "卡审失败转交", "待接", "0", "等待素材审核页识别"],
  ["2026-06-27 10:00", "飞书账务同步", "待接口", "0", "接口未接，当前只保留同步队列"],
  ["2026-06-26 20:58", "剪辑任务更新", "已记录", "0", "卡审修改和绿联进度已进入页面原型"],
];

const automationHandoffRows = [
  ["字段缺失", "缺负责人、金额、账户归属时停止自动派发", "进入对应模块待补信息"],
  ["识别低置信", "OCR/页面文本识别不稳定时不直接改数据", "进入人工确认"],
  ["同步失败", "飞书接口失败、权限异常或字段不匹配", "生成财务接管任务"],
  ["规则冲突", "同一账户同时命中多个高优先级规则", "进入管理者复核"],
];

const settingsRoleRows = [
  ["管理者", "全局驾驶舱、报表、自动化、设置", "可查看全局数据 / 可处理高优先级异常", "待配置"],
  ["投手组", "投手工作台、账户、财务部分记录", "只能处理自己负责账户和任务", "待配置"],
  ["剪辑组", "剪辑工作台、素材中心", "只看卡审修改、素材任务和上传进度", "待配置"],
  ["财务", "财务、报表、同步失败接管", "确认金额、报销、支出和飞书同步异常", "待配置"],
];

const settingsFieldRows = [
  ["账户状态", "正常 / 低余额 / 异常 / 待核对 / 待充值", "账户中心 / 投手任务"],
  ["素材状态", "待审核 / 卡审失败 / 待修改 / 已上传 / 待复核", "剪辑工作台 / 素材中心"],
  ["费用类型", "投流 / 物料 / 账户购买 / 刷粉 / 报销 / 其他", "财务 / 报表"],
  ["同步状态", "待同步 / 已同步 / 同步失败 / 人工接管", "报表 / 自动化"],
];

const settingsNotifyRows = [
  ["低余额提醒", "账户余额低于阈值", "对应投手 + 财务", "待配置"],
  ["卡审失败", "素材审核失败或出现驳回原因", "投手 + 对应剪辑", "待接"],
  ["飞书同步失败", "账务写入飞书失败", "财务 + 管理者", "待接口"],
  ["规则冲突", "同一对象命中多个高优先级规则", "管理者", "待配置"],
];

const settingsAuditRows = [
  ["2026-06-27 12:10", "自动化中心", "新增运行控制台结构", "系统", "已发布"],
  ["2026-06-27 11:58", "数据报表", "补充飞书同步队列和字段映射", "系统", "已发布"],
  ["2026-06-26 20:58", "剪辑工作台", "新增卡审修改和绿联云盘进度", "系统", "已发布"],
  ["2026-06-26 20:31", "投手工作台", "确定内置浏览器自动采集优先", "系统", "已发布"],
];

let activeModuleId = "cockpit";
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
const pageEyebrow = document.querySelector(".topbar .eyebrow");
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
  const groups = [...new Set(modules.map((item) => item.group || "其他"))];
  moduleNav.innerHTML = groups
    .map((group) => {
      const groupItems = modules.filter((item) => (item.group || "其他") === group);
      return `
        <div class="nav-section">
          <div class="nav-section-title">${group}</div>
          ${groupItems
            .map(
              (item) => `
                <button class="nav-item ${item.id === activeModuleId ? "active" : ""}" type="button" data-module="${item.id}">
                  <i data-lucide="${item.icon}"></i>
                  <span>${item.nav}</span>
                  <span class="nav-priority">${item.priority}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      `;
    })
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

function renderCockpit() {
  const editorTarget = editorProfiles.reduce((sum, item) => sum + item.target, 0);
  const editorUploaded = editorProfiles.reduce((sum, item) => sum + item.uploaded, 0);
  const abnormalAccounts = getAbnormalRows(realAccountRows).length;
  const lowBalanceAccounts = getRechargeRows(realAccountRows).length;

  chartArea.innerHTML = `
    <div class="cockpit-workbench">
      <section class="cockpit-main">
        <div class="admin-page-meta">
          <div>
            <span>内容创新部 / 管理者视角</span>
            <strong>经营与人员进度一览</strong>
          </div>
          <div class="admin-meta-tags">
            <span>月度数据</span>
            <span>昨日数据</span>
            <span>员工工作量</span>
            <span>异常干预</span>
          </div>
        </div>

        <div class="cockpit-kpi-grid">
          ${cockpitMonthlyRows
            .map(
              ([title, value, detail]) => `
                <article>
                  <span>${title}</span>
                  <strong>${value}</strong>
                  <small>${detail}</small>
                </article>
              `,
            )
            .join("")}
        </div>

        <div class="cockpit-section-grid">
          <section class="worktable-panel">
            <div class="erp-panel-title">
              <div>
                <h3>昨日经营数据</h3>
                <p>正式链路应由内置浏览器逐账户采集；未接字段不造假。</p>
              </div>
            </div>
            <div class="cockpit-mini-grid">
              ${cockpitYesterdayRows
                .map(
                  ([title, value, detail]) => `
                    <article>
                      <span>${title}</span>
                      <strong>${value}</strong>
                      <small>${detail}</small>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </section>

          <section class="worktable-panel">
            <div class="erp-panel-title">
              <div>
                <h3>今日执行概况</h3>
                <p>投手看账户异常；剪辑看卡审修改和绿联上传。</p>
              </div>
            </div>
            <div class="cockpit-mini-grid">
              <article><span>账户异常</span><strong>${abnormalAccounts}</strong><small>来自真实账户底表，后续自动采集</small></article>
              <article><span>低余额账户</span><strong>${lowBalanceAccounts}</strong><small>低于 1000 需确认充值</small></article>
              <article><span>卡审修改</span><strong>${editorRevisionRows.length}</strong><small>剪辑优先处理</small></article>
              <article><span>剪辑上传</span><strong>${editorUploaded}/${editorTarget}</strong><small>绿联云盘待接入自动确认</small></article>
            </div>
          </section>
        </div>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>员工工作量与完成进度</h3>
              <p>管理者看每个人今天在干什么、进度多少、哪里需要介入。</p>
            </div>
            <div class="erp-batch-actions">
              <button class="mini-button" type="button">按组筛选</button>
              <button class="mini-button" type="button">查看异常</button>
              <button class="mini-button" type="button">导出周报</button>
            </div>
          </div>
          <div class="cockpit-employee-table">
            <div class="cockpit-employee-row header">
              <div>员工</div>
              <div>角色</div>
              <div>今日工作内容</div>
              <div>工作量</div>
              <div>完成进度</div>
              <div>管理动作</div>
            </div>
            ${cockpitEmployeeRows
              .map(
                ([name, role, work, workload, progress]) => `
                  <div class="cockpit-employee-row">
                    <div><strong>${name}</strong></div>
                    <div>${role}</div>
                    <div>${work}</div>
                    <div>${workload}</div>
                    <div><span class="state-tag">${progress}</span></div>
                    <div><button class="mini-button" type="button">查看明细</button></div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>
      </section>

      <aside class="cockpit-rail">
        <section class="rail-panel">
          <div class="rail-title">
            <strong>管理者先看</strong>
            <span>今日判断顺序</span>
          </div>
          <div class="rail-task-list">
            <div class="rail-task danger"><strong>先看异常</strong><span>账户异常、卡审积压、绿联未上传</span></div>
            <div class="rail-task warning"><strong>再看进度</strong><span>员工工作量是否完成，谁需要提醒</span></div>
            <div class="rail-task"><strong>最后看经营</strong><span>月度、昨日销售和 ROI 等待自动采集</span></div>
          </div>
        </section>

        <section class="rail-panel">
          <div class="rail-title">
            <strong>异常队列</strong>
            <span>需要介入</span>
          </div>
          <div class="sync-list">
            ${cockpitRiskRows
              .map(
                ([level, title, detail, action]) => `
                  <div class="sync-row">
                    <div><strong>${title}</strong><span>${detail}</span></div>
                    <em>${level}</em>
                    <small>${action}</small>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="rail-panel">
          <div class="rail-title">
            <strong>数据接入状态</strong>
            <span>不造假数</span>
          </div>
          <div class="sync-list">
            <div class="sync-row"><div><strong>账户归属底表</strong><span>真实账户数据已可用</span></div><em>已接</em></div>
            <div class="sync-row"><div><strong>月度销售</strong><span>后台自动采集后展示</span></div><em>待接</em></div>
            <div class="sync-row"><div><strong>昨日 ROI</strong><span>千川逐账户采集</span></div><em>待接</em></div>
            <div class="sync-row"><div><strong>员工进度</strong><span>绿联云盘 + 后台素材名</span></div><em>待接</em></div>
          </div>
        </section>
      </aside>
    </div>
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
    <div class="editor-workbench">
      <section class="editor-main">
        <div class="admin-page-meta">
          <div>
            <span>内容创新部 / 剪辑生产</span>
            <strong>剪辑每日生产台</strong>
          </div>
          <div class="admin-meta-tags">
            <span>卡审修改优先</span>
            <span>绿联云盘待接</span>
            <span>剪映入口待内置</span>
          </div>
        </div>

        <div class="editor-summary">
          <div><span>卡审修改</span><strong>${editorRevisionRows.length}</strong></div>
          <div><span>今日剪辑要求</span><strong>${editorProfiles.reduce((sum, item) => sum + item.target, 0)}</strong></div>
          <div><span>已上传绿联</span><strong>${editorProfiles.reduce((sum, item) => sum + item.uploaded, 0)}</strong></div>
          <div><span>剩余素材</span><strong>${editorProfiles.reduce((sum, item) => sum + item.target - item.uploaded, 0)}</strong></div>
          <div><span>销售归因</span><strong>待采集</strong></div>
        </div>

        <div class="editor-object-row">
          <article><i data-lucide="message-square-warning"></i><div><strong>卡审修改</strong><span>投手推送驳回原因，剪辑负责改素材</span></div></article>
          <article><i data-lucide="scissors"></i><div><strong>素材剪辑</strong><span>按每天要求数量领取、制作、上传</span></div></article>
          <article><i data-lucide="hard-drive-upload"></i><div><strong>绿联云盘</strong><span>接入上传路径，自动确认每人进度</span></div></article>
          <article><i data-lucide="chart-no-axes-combined"></i><div><strong>销售归因</strong><span>后台素材名含剪辑姓名，自动提取业绩</span></div></article>
          <article><i data-lucide="clapperboard"></i><div><strong>剪映入口</strong><span>优先内置，做不到先放跳转按钮</span></div></article>
        </div>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>卡审修改队列</h3>
              <p>由投手卡审失败自动推送；同一条问题同步给投手和对应剪辑。</p>
            </div>
            <div class="erp-batch-actions">
              <button class="mini-button" type="button">标记修改中</button>
              <button class="mini-button" type="button">上传复审</button>
              <button class="mini-button" type="button">通知投手</button>
            </div>
          </div>
          <div class="editor-table">
            <div class="editor-table-row header">
              <div>优先级</div>
              <div>素材</div>
              <div>卡审问题</div>
              <div>投手</div>
              <div>剪辑</div>
              <div>状态</div>
              <div>操作</div>
            </div>
            ${editorRevisionRows
              .map(
                ([priority, material, issue, buyer, editor, status]) => `
                  <div class="editor-table-row">
                    <div><span class="priority-badge ${priority.toLowerCase()}">${priority}</span></div>
                    <div><strong>${material}</strong><small>来源：千川卡审采集</small></div>
                    <div>${issue}</div>
                    <div>${buyer}</div>
                    <div>${editor}</div>
                    <div><span class="state-tag ${status === "待修改" ? "warning" : ""}">${status}</span></div>
                    <div class="erp-row-actions">
                      <button class="mini-button" type="button">打开剪映</button>
                      <button class="mini-button" type="button">上传绿联</button>
                    </div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>每日剪辑数量与上传进度</h3>
              <p>目标来自组长分配；完成情况通过绿联云盘路径和文件命名自动确认。</p>
            </div>
          </div>
          <div class="editor-table compact">
            <div class="editor-table-row production header">
              <div>剪辑</div>
              <div>要求数量</div>
              <div>已上传</div>
              <div>剩余</div>
              <div>绿联路径</div>
              <div>状态</div>
            </div>
            ${editorProductionRows
              .map(
                ([editor, target, uploaded, left, path, status]) => `
                  <div class="editor-table-row production">
                    <div><strong>${editor}</strong></div>
                    <div>${target}</div>
                    <div>${uploaded}</div>
                    <div>${left}</div>
                    <div>${path}</div>
                    <div><span class="state-tag">${status}</span></div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>
      </section>

      <aside class="editor-rail">
        <section class="rail-panel">
          <div class="rail-title">
            <strong>今天先做</strong>
            <span>剪辑组</span>
          </div>
          <div class="rail-task-list">
            <div class="rail-task danger"><strong>先改卡审</strong><span>${editorRevisionRows.length} 条卡审问题，先处理投手推送</span></div>
            <div class="rail-task warning"><strong>补齐数量</strong><span>${editorProfiles.reduce((sum, item) => sum + item.target - item.uploaded, 0)} 条素材未上传绿联</span></div>
            <div class="rail-task"><strong>销售归因</strong><span>后台素材名按剪辑姓名抽取，生成个人销售额</span></div>
          </div>
        </section>

        <section class="rail-panel">
          <div class="rail-title">
            <strong>人员进度</strong>
            <span>按人确认</span>
          </div>
          <div class="editor-progress-list">
            ${editorProfiles
              .map(
                (item) => `
                  <div class="editor-progress-row">
                    <div><strong>${item.name}</strong><span>${item.role}</span></div>
                    <em>${item.uploaded}/${item.target}</em>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="rail-panel">
          <div class="rail-title">
            <strong>接入方式</strong>
            <span>不做台账日报</span>
          </div>
          <div class="sync-list">
            <div class="sync-row"><div><strong>绿联云盘</strong><span>读取路径、文件数、上传时间</span></div><em>待接</em></div>
            <div class="sync-row"><div><strong>剪映</strong><span>优先内置；不行则跳转</span></div><em>待评估</em></div>
            <div class="sync-row"><div><strong>销售归因</strong><span>后台素材名提取剪辑姓名</span></div><em>待采集</em></div>
          </div>
        </section>
      </aside>
    </div>
  `;
}

function renderMaterials() {
  chartArea.innerHTML = `
    <div class="materials-workbench">
      <section class="materials-main">
        <div class="admin-page-meta">
          <div>
            <span>内容创新部 / 历史素材</span>
            <strong>素材中心</strong>
          </div>
          <div class="admin-meta-tags">
            <span>历史素材展示</span>
            <span>绿联云盘待接</span>
            <span>按人分类</span>
            <span>按素材类型归档</span>
          </div>
        </div>

        <div class="editor-summary">
          <div><span>历史文件夹</span><strong>${materialFolderRows.length}</strong></div>
          <div><span>素材记录</span><strong>${materialHistoryRows.length}</strong></div>
          <div><span>人员分类</span><strong>4</strong></div>
          <div><span>绿联状态</span><strong>待接</strong></div>
          <div><span>可复用素材</span><strong>待识别</strong></div>
        </div>

        <div class="editor-object-row">
          <article><i data-lucide="folder-open"></i><div><strong>历史文件夹</strong><span>展示原有绿联云盘文件夹和项目路径</span></div></article>
          <article><i data-lucide="users"></i><div><strong>按人分类</strong><span>罗沛、戴秀婷、周亮、邹泽敏等人员素材</span></div></article>
          <article><i data-lucide="tags"></i><div><strong>素材标签</strong><span>精剪、卡审、拍摄、封面、低质搬运</span></div></article>
          <article><i data-lucide="history"></i><div><strong>历史追溯</strong><span>保留上传时间、负责人、状态和用途</span></div></article>
          <article><i data-lucide="hard-drive"></i><div><strong>绿联云盘</strong><span>待接文件数、路径、上传时间、缩略图</span></div></article>
        </div>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>绿联云盘文件夹</h3>
              <p>素材中心主要看历史素材和文件夹，不再拆商品卡/切片独立模块。</p>
            </div>
            <div class="erp-batch-actions">
              <button class="mini-button" type="button">同步绿联</button>
              <button class="mini-button" type="button">按人筛选</button>
              <button class="mini-button" type="button">按类型筛选</button>
            </div>
          </div>
          <div class="editor-table">
            <div class="editor-table-row material header">
              <div>文件夹</div>
              <div>分类</div>
              <div>负责人</div>
              <div>文件数</div>
              <div>标签</div>
              <div>操作</div>
            </div>
            ${materialFolderRows
              .map(
                ([folder, type, owner, count, tags]) => `
                  <div class="editor-table-row material">
                    <div><strong>${folder}</strong><small>来源：绿联云盘</small></div>
                    <div>${type}</div>
                    <div>${owner}</div>
                    <div><span class="state-tag">${count}</span></div>
                    <div>${tags}</div>
                    <div><button class="mini-button" type="button">查看素材</button></div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>历史素材记录</h3>
              <p>保留历史素材、修改、上传和复审状态，方便后续查找。</p>
            </div>
          </div>
          <div class="editor-table compact">
            <div class="editor-table-row history header">
              <div>时间</div>
              <div>素材</div>
              <div>类型</div>
              <div>人员</div>
              <div>状态</div>
            </div>
            ${materialHistoryRows
              .map(
                ([time, material, type, owner, status]) => `
                  <div class="editor-table-row history">
                    <div>${time}</div>
                    <div><strong>${material}</strong></div>
                    <div>${type}</div>
                    <div>${owner}</div>
                    <div><span class="state-tag">${status}</span></div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>
      </section>

      <aside class="editor-rail">
        <section class="rail-panel">
          <div class="rail-title">
            <strong>素材中心先做</strong>
            <span>历史归档</span>
          </div>
          <div class="rail-task-list">
            <div class="rail-task"><strong>接绿联云盘</strong><span>读取文件夹、文件数、上传人、上传时间</span></div>
            <div class="rail-task"><strong>按人归档</strong><span>每个剪辑所有历史素材集中展示</span></div>
            <div class="rail-task"><strong>按类型分类</strong><span>精剪、卡审、拍摄、封面、低质搬运</span></div>
          </div>
        </section>
      </aside>
    </div>
  `;
}

function renderAccounts() {
  const rows = uniqueRows(realAccountRows).slice(0, 60);
  const abnormalRows = getAbnormalRows(realAccountRows);
  const lowBalanceRows = getRechargeRows(realAccountRows);

  chartArea.innerHTML = `
    <div class="accounts-workbench">
      <section class="materials-main">
        <div class="admin-page-meta">
          <div>
            <span>内容创新部 / 账户资产</span>
            <strong>账户中心</strong>
          </div>
          <div class="admin-meta-tags">
            <span>账户总表</span>
            <span>按类型分类</span>
            <span>状态自动采集待接</span>
          </div>
        </div>

        <div class="editor-summary">
          <div><span>全部账户</span><strong>${uniqueRows(realAccountRows).length}</strong></div>
          <div><span>商品卡</span><strong>${realAccountRows.filter((row) => row.账户类型 === "商品卡").length}</strong></div>
          <div><span>切片</span><strong>${realAccountRows.filter((row) => row.账户类型 === "切片").length}</strong></div>
          <div><span>账户异常</span><strong>${abnormalRows.length}</strong></div>
          <div><span>低余额</span><strong>${lowBalanceRows.length}</strong></div>
        </div>

        <div class="editor-object-row">
          ${accountCategoryRows
            .map(
              ([title, countFn, detail]) => `
                <article><i data-lucide="wallet-cards"></i><div><strong>${title}</strong><span>${countFn()} 个 / ${detail}</span></div></article>
              `,
            )
            .join("")}
          <article><i data-lucide="activity"></i><div><strong>状态采集</strong><span>未来由内置浏览器自动采集余额、登录态和异常</span></div></article>
        </div>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>账户列表</h3>
              <p>把所有账户作为资产清单集中展示；余额和状态后续从后台自动采集。</p>
            </div>
            <div class="erp-batch-actions">
              <button class="mini-button" type="button">按类型筛选</button>
              <button class="mini-button" type="button">按负责人筛选</button>
              <button class="mini-button" type="button">采集状态</button>
            </div>
          </div>
          <div class="editor-table">
            <div class="editor-table-row account header">
              <div>账户</div>
              <div>账户ID</div>
              <div>类型</div>
              <div>负责人</div>
              <div>余额</div>
              <div>状态</div>
              <div>备注</div>
            </div>
            ${rows
              .map(
                (row) => `
                  <div class="editor-table-row account">
                    <div><strong>${formatAccountName(row)}</strong><small>${row.账户用途 || "用途未填"}</small></div>
                    <div>${row.账户ID || "无账户ID"}</div>
                    <div>${row.账户类型} / ${row.项目}</div>
                    <div>${row.登记人 || row.账户使用人 || "未填"}</div>
                    <div>${formatMoney(row.余额)}</div>
                    <div><span class="state-tag ${row.今日异常 !== "正常使用中" ? "warning" : ""}">${row.今日异常}</span></div>
                    <div>${row.备注 || "无"}</div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>
      </section>

      <aside class="editor-rail">
        <section class="rail-panel">
          <div class="rail-title">
            <strong>账户中心先做</strong>
            <span>资产清单</span>
          </div>
          <div class="rail-task-list">
            <div class="rail-task"><strong>统一账户列表</strong><span>所有千川、商品卡、切片、达人相关账户集中展示</span></div>
            <div class="rail-task warning"><strong>异常账户</strong><span>${abnormalRows.length} 个账户状态需要确认</span></div>
            <div class="rail-task"><strong>自动采集</strong><span>内置浏览器采集余额、登录态、账户状态</span></div>
          </div>
        </section>
      </aside>
    </div>
  `;
}

function renderFinance() {
  chartArea.innerHTML = `
    <div class="finance-workbench">
      <section class="materials-main">
        <div class="admin-page-meta">
          <div>
            <span>内容创新部 / 本月收支</span>
            <strong>财务模块</strong>
          </div>
          <div class="admin-meta-tags">
            <span>卖货收入</span>
            <span>投流支出</span>
            <span>采买费用</span>
            <span>历史记录</span>
          </div>
        </div>

        <div class="finance-overview-grid">
          <article><span>本月整体支付金额</span><strong>待采集</strong><small>卖货收入：全部支付金额</small></article>
          <article><span>本月有效收入金额</span><strong>待采集</strong><small>剔除退款、异常后的有效收入</small></article>
          <article><span>本月总支出</span><strong>待汇总</strong><small>投流 + 物料 + 账户 + 刷粉 + 其他</small></article>
          <article><span>本月净结果</span><strong>待计算</strong><small>有效收入 - 总支出</small></article>
        </div>

        <div class="cockpit-section-grid">
          <section class="worktable-panel">
            <div class="erp-panel-title">
              <div>
                <h3>收入构成</h3>
                <p>收入只有卖货收入，拆整体支付金额和有效收入金额。</p>
              </div>
            </div>
            <div class="finance-breakdown-list">
              ${financeIncomeRows.map(([title, value, detail]) => `<div><strong>${title}</strong><span>${detail}</span><em>${value}</em></div>`).join("")}
            </div>
          </section>

          <section class="worktable-panel">
            <div class="erp-panel-title">
              <div>
                <h3>支出种类</h3>
                <p>支出按业务费用分类，便于看钱花在哪里。</p>
              </div>
            </div>
            <div class="finance-breakdown-list">
              ${financeExpenseRows.map(([title, value, detail]) => `<div><strong>${title}</strong><span>${detail}</span><em>${value}</em></div>`).join("")}
            </div>
          </section>
        </div>

        <div class="action-strip finance-actions">
          <button class="quick-action" type="button"><i data-lucide="shopping-cart"></i> 记录物料购买</button>
          <button class="quick-action" type="button"><i data-lucide="badge-dollar-sign"></i> 记录账户购买</button>
          <button class="quick-action" type="button"><i data-lucide="user-plus"></i> 记录刷粉数量</button>
          <button class="quick-action" type="button"><i data-lucide="bell-ring"></i> 设置充值提醒</button>
          <button class="quick-action" type="button"><i data-lucide="receipt-text"></i> 核对发票金额</button>
        </div>

    <section class="worktable-panel finance-history-panel">
      <div class="erp-panel-title">
        <div>
          <h3>财务历史记录</h3>
          <p>保留物料购买、账户购买、刷粉数量、充值和发票确认记录。</p>
        </div>
      </div>
      <div class="editor-table compact">
        <div class="editor-table-row finance-history header">
          <div>日期</div>
          <div>类型</div>
          <div>事项</div>
          <div>负责人</div>
          <div>状态</div>
        </div>
        ${financeHistoryRows
          .map(
            ([date, type, item, owner, status]) => `
              <div class="editor-table-row finance-history">
                <div>${date}</div>
                <div>${type}</div>
                <div><strong>${item}</strong></div>
                <div>${owner}</div>
                <div><span class="state-tag">${status}</span></div>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
      </section>
    </div>
  `;
}

function renderReports() {
  const pendingSyncCount = reportLedgerRows.filter((row) => row[5].includes("待同步") || row[5].includes("暂存")).length;
  const manualPendingCount = reportLedgerRows.filter((row) => row[3].includes("待填写") || row[3].includes("待采集")).length;
  chartArea.innerHTML = `
    <div class="reports-workbench">
      <section class="materials-main">
        <div class="admin-page-meta">
          <div>
            <span>内容创新部 / 账务集合地</span>
            <strong>数据报表</strong>
          </div>
          <div class="admin-meta-tags">
            <span>系统内填写</span>
            <span>账务记录库</span>
            <span>历史查询</span>
            <span>同步飞书</span>
          </div>
        </div>

        <div class="finance-overview-grid">
          <article><span>本月收入</span><strong>待采集</strong><small>卖货收入：支付金额 / 有效收入</small></article>
          <article><span>本月支出</span><strong>待汇总</strong><small>投流、物料、账户、刷粉、报销</small></article>
          <article><span>账务记录</span><strong>${reportLedgerRows.length}</strong><small>系统内记录库</small></article>
          <article><span>飞书待同步</span><strong>${pendingSyncCount}</strong><small>待接接口，不填假数</small></article>
        </div>

        <div class="editor-object-row">
          <article><i data-lucide="database"></i><div><strong>主库在系统</strong><span>报销、支出、收入、投流先进入系统内账务库</span></div></article>
          <article><i data-lucide="scan-line"></i><div><strong>自动采集优先</strong><span>收入、投流消耗优先从后台采集，人工只补充和确认</span></div></article>
          <article><i data-lucide="table"></i><div><strong>飞书只做同步</strong><span>飞书用于共享、备份和历史兜底，不做员工主入口</span></div></article>
          <article><i data-lucide="circle-alert"></i><div><strong>失败可接管</strong><span>字段缺失、同步失败、权限异常自动生成财务待办</span></div></article>
          <article><i data-lucide="file-check-2"></i><div><strong>月度汇总</strong><span>按收入、费用、项目、负责人沉淀经营报表</span></div></article>
        </div>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>账务分类汇总</h3>
              <p>财务里的所有账最终汇总到这里；飞书是同步出口，不是重复填报入口。</p>
            </div>
            <div class="erp-batch-actions">
              <button class="mini-button" type="button">新增账务</button>
              <button class="mini-button" type="button">汇总本月</button>
              <button class="mini-button" type="button">同步飞书</button>
            </div>
          </div>
          <div class="editor-table compact">
            <div class="editor-table-row report-category header">
              <div>分类</div>
              <div>类型</div>
              <div>金额</div>
              <div>说明</div>
            </div>
            ${reportCategoryRows
              .map(
                ([category, type, amount, detail]) => `
                  <div class="editor-table-row report-category">
                    <div><strong>${category}</strong></div>
                    <div>${type}</div>
                    <div><span class="state-tag">${amount}</span></div>
                    <div>${detail}</div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>账务历史记录</h3>
              <p>报销、支出、收入、投流、物料、账户购买、刷粉等全部在这里查，并标明飞书目标字段。</p>
            </div>
          </div>
          <div class="editor-table">
            <div class="editor-table-row report-ledger header">
              <div>日期</div>
              <div>类型</div>
              <div>事项</div>
              <div>金额</div>
              <div>来源</div>
              <div>状态</div>
              <div>飞书目标</div>
            </div>
            ${reportLedgerRows
              .map(
                ([date, type, item, amount, source, status, target]) => `
                  <div class="editor-table-row report-ledger">
                    <div>${date}</div>
                    <div>${type}</div>
                    <div><strong>${item}</strong></div>
                    <div>${amount}</div>
                    <div>${source}</div>
                    <div><span class="state-tag">${status}</span></div>
                    <div>${target}</div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>飞书同步队列</h3>
              <p>先把系统内账务记录校验通过，再推送到对应飞书表格 / 多维表。</p>
            </div>
          </div>
          <div class="editor-table compact">
            <div class="editor-table-row report-sync header">
              <div>同步表</div>
              <div>同步内容</div>
              <div>系统来源</div>
              <div>飞书目标</div>
              <div>状态</div>
            </div>
            ${reportSyncRows
              .map(
                ([name, content, source, target, status]) => `
                  <div class="editor-table-row report-sync">
                    <div><strong>${name}</strong></div>
                    <div>${content}</div>
                    <div>${source}</div>
                    <div>${target}</div>
                    <div><span class="state-tag ${status.includes("待接") ? "warning" : ""}">${status}</span></div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="worktable-panel reports-two-column">
          <div>
            <div class="erp-panel-title">
              <div>
                <h3>飞书字段映射</h3>
                <p>字段先统一口径，后面接接口时直接落表。</p>
              </div>
            </div>
            <div class="report-field-list">
              ${reportFeishuFieldRows
                .map(
                  ([systemField, feishuField, source, note]) => `
                    <div>
                      <strong>${systemField}</strong>
                      <span>${feishuField}</span>
                      <small>${source} · ${note}</small>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
          <div>
            <div class="erp-panel-title">
              <div>
                <h3>同步流程</h3>
                <p>没有接通接口前，所有状态明确标待接 / 待同步。</p>
              </div>
            </div>
            <div class="report-flow-list">
              ${reportWorkflowRows
                .map(
                  ([step, title, detail, status]) => `
                    <div>
                      <b>${step}</b>
                      <strong>${title}</strong>
                      <span>${detail}</span>
                      <em>${status}</em>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
        </section>
      </section>

      <aside class="editor-rail">
        <section class="rail-panel">
          <div class="rail-title">
            <strong>报表先做</strong>
            <span>账务集合地</span>
          </div>
          <div class="rail-task-list">
            <div class="rail-task"><strong>待补金额</strong><span>${manualPendingCount} 条记录还缺真实金额，先标待采集 / 待填写</span></div>
            <div class="rail-task"><strong>同步队列</strong><span>${reportSyncRows.length} 类账务准备同步飞书，接口未接前不伪装完成</span></div>
            <div class="rail-task"><strong>接管规则</strong><span>同步失败、字段缺失、权限异常进入财务待办</span></div>
          </div>
        </section>
        <section class="rail-panel">
          <div class="rail-title">
            <strong>飞书定位</strong>
            <span>云端备份</span>
          </div>
          <div class="sync-list">
            <div class="sync-row"><div><strong>不是主入口</strong><span>员工不重复填飞书</span></div><em>已明确</em></div>
            <div class="sync-row"><div><strong>同步方向</strong><span>系统账务库 -> 飞书</span></div><em>待接</em></div>
            <div class="sync-row"><div><strong>失败处理</strong><span>生成财务待办，人工确认后重试</span></div><em>待配置</em></div>
          </div>
        </section>
      </aside>
    </div>
  `;
}

function renderAutomation() {
  const pendingWorkflowCount = automationWorkflowRows.filter((row) => row[4].includes("待")).length;
  const pendingRuleCount = automationRuleRows.filter((row) => row[5].includes("待")).length;
  const handoffCount = automationHandoffRows.length;
  chartArea.innerHTML = `
    <div class="automation-workbench">
      <section class="automation-main">
        <div class="admin-page-meta">
          <div>
            <span>内容创新部 / 自动化运行控制台</span>
            <strong>自动化中心</strong>
          </div>
          <div class="admin-meta-tags">
            <span>触发器</span>
            <span>条件规则</span>
            <span>任务派发</span>
            <span>执行日志</span>
            <span>人工接管</span>
          </div>
        </div>

        <div class="finance-overview-grid">
          <article><span>工作流</span><strong>${automationWorkflowRows.length}</strong><small>账户、素材、台账、同步</small></article>
          <article><span>核心规则</span><strong>${automationRuleRows.length}</strong><small>只列业务关键规则</small></article>
          <article><span>待接 / 待配置</span><strong>${pendingWorkflowCount + pendingRuleCount}</strong><small>不伪装已自动化</small></article>
          <article><span>接管场景</span><strong>${handoffCount}</strong><small>失败后有人处理</small></article>
        </div>

        <div class="automation-pipeline">
          <article><i data-lucide="mouse-pointer-click"></i><strong>触发</strong><span>定时、员工打开后台、上传文件、手动同步</span></article>
          <i data-lucide="arrow-right"></i>
          <article><i data-lucide="scan-line"></i><strong>采集</strong><span>页面文本、截图/OCR、飞书/WPS、CSV</span></article>
          <i data-lucide="arrow-right"></i>
          <article><i data-lucide="git-branch"></i><strong>判断</strong><span>余额、状态、ROI、卡审、字段完整性</span></article>
          <i data-lucide="arrow-right"></i>
          <article><i data-lucide="send"></i><strong>派发</strong><span>投手、剪辑、财务、管理者待办</span></article>
          <i data-lucide="arrow-right"></i>
          <article><i data-lucide="life-buoy"></i><strong>接管</strong><span>失败、低置信、字段缺失进入人工处理</span></article>
        </div>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>自动化工作流</h3>
              <p>第一层看流程是否在跑；规则只作为每条流程的配置，不在员工工作台铺满。</p>
            </div>
            <div class="erp-batch-actions">
              <button class="mini-button" type="button">新增工作流</button>
              <button class="mini-button" type="button">手动运行</button>
              <button class="mini-button" type="button">查看失败</button>
            </div>
          </div>
          <div class="editor-table">
            <div class="editor-table-row automation-flow-row header">
              <div>流程</div>
              <div>来源</div>
              <div>触发方式</div>
              <div>输出</div>
              <div>状态</div>
              <div>步骤</div>
            </div>
            ${automationWorkflowRows
              .map(
                ([name, source, trigger, output, status, steps]) => `
                  <div class="editor-table-row automation-flow-row">
                    <div><strong>${name}</strong></div>
                    <div>${source}</div>
                    <div>${trigger}</div>
                    <div>${output}</div>
                    <div><span class="state-tag ${status.includes("待") ? "warning" : ""}">${status}</span></div>
                    <div>${steps}</div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>核心规则库</h3>
              <p>只展示会改变任务派发的关键规则；底层识别细节后续放到配置页或技术日志。</p>
            </div>
          </div>
          <div class="editor-table">
            <div class="editor-table-row automation-rule-row header">
              <div>分组</div>
              <div>规则</div>
              <div>触发条件</div>
              <div>系统动作</div>
              <div>推送对象</div>
              <div>状态</div>
            </div>
            ${automationRuleRows
              .map(
                ([group, rule, condition, action, target, status]) => `
                  <div class="editor-table-row automation-rule-row">
                    <div>${group}</div>
                    <div><strong>${rule}</strong></div>
                    <div>${condition}</div>
                    <div>${action}</div>
                    <div>${target}</div>
                    <div><span class="state-tag ${status.includes("待") ? "warning" : ""}">${status}</span></div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="worktable-panel reports-two-column">
          <div>
            <div class="erp-panel-title">
              <div>
                <h3>执行日志</h3>
                <p>自动化不是只看配置，更要看每次运行结果。</p>
              </div>
            </div>
            <div class="automation-log-list">
              ${automationExecutionRows
                .map(
                  ([time, flow, status, failed, detail]) => `
                    <div>
                      <span>${time}</span>
                      <strong>${flow}</strong>
                      <em>${status}</em>
                      <small>失败 ${failed} · ${detail}</small>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
          <div>
            <div class="erp-panel-title">
              <div>
                <h3>失败人工接管</h3>
                <p>第一版不追求全自动，关键是失败后能被看见并交给人处理。</p>
              </div>
            </div>
            <div class="automation-handoff-list">
              ${automationHandoffRows
                .map(
                  ([title, condition, action]) => `
                    <div>
                      <strong>${title}</strong>
                      <span>${condition}</span>
                      <em>${action}</em>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
        </section>
      </section>

      <aside class="editor-rail">
        <section class="rail-panel">
          <div class="rail-title">
            <strong>自动化定位</strong>
            <span>发动机舱</span>
          </div>
          <div class="rail-task-list">
            <div class="rail-task"><strong>员工不看规则</strong><span>投手、剪辑、财务只看被派发的任务和异常</span></div>
            <div class="rail-task"><strong>管理员看运行</strong><span>这里看流程是否启用、是否失败、谁接管</span></div>
            <div class="rail-task"><strong>规则不全铺</strong><span>页面只列业务关键规则，细节进入后续配置</span></div>
          </div>
        </section>
        <section class="rail-panel">
          <div class="rail-title">
            <strong>优先顺序</strong>
            <span>P0 -> P1</span>
          </div>
          <div class="sync-list">
            <div class="sync-row"><div><strong>账户巡检</strong><span>先把投手今日任务跑出来</span></div><em>P0</em></div>
            <div class="sync-row"><div><strong>卡审转交</strong><span>同步投手和对应剪辑</span></div><em>P0</em></div>
            <div class="sync-row"><div><strong>账务同步</strong><span>报表确认后再写飞书</span></div><em>P1</em></div>
            <div class="sync-row"><div><strong>执行日志</strong><span>所有自动动作都要可追溯</span></div><em>P1</em></div>
          </div>
        </section>
      </aside>
    </div>
  `;
}

function renderSettings() {
  chartArea.innerHTML = `
    <div class="settings-workbench">
      <section class="settings-main">
        <div class="admin-page-meta">
          <div>
            <span>内容创新部 / 管理配置</span>
            <strong>系统设置</strong>
          </div>
          <div class="admin-meta-tags">
            <span>人员角色</span>
            <span>权限范围</span>
            <span>字段字典</span>
            <span>通知策略</span>
            <span>审计日志</span>
          </div>
        </div>

        <div class="settings-command-grid">
          <article><i data-lucide="users"></i><div><strong>角色权限</strong><span>先固化管理者、投手、剪辑、财务四类权限</span></div></article>
          <article><i data-lucide="list-checks"></i><div><strong>字段字典</strong><span>账户、素材、费用、同步状态统一口径</span></div></article>
          <article><i data-lucide="bell-ring"></i><div><strong>通知策略</strong><span>异常命中后推给对应员工，不靠人记得转发</span></div></article>
          <article><i data-lucide="shield-check"></i><div><strong>审计留痕</strong><span>规则、金额、权限、同步配置变更都要可追溯</span></div></article>
        </div>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>角色与权限范围</h3>
              <p>设置页不承载日常业务，只管理谁能看、谁能改、谁负责接管。</p>
            </div>
            <div class="erp-batch-actions">
              <button class="mini-button" type="button">新增角色</button>
              <button class="mini-button" type="button">权限模板</button>
              <button class="mini-button" type="button">保存配置</button>
            </div>
          </div>
          <div class="editor-table">
            <div class="editor-table-row settings-role-row header">
              <div>角色</div>
              <div>可访问模块</div>
              <div>权限边界</div>
              <div>状态</div>
            </div>
            ${settingsRoleRows
              .map(
                ([role, modulesText, scope, status]) => `
                  <div class="editor-table-row settings-role-row">
                    <div><strong>${role}</strong></div>
                    <div>${modulesText}</div>
                    <div>${scope}</div>
                    <div><span class="state-tag warning">${status}</span></div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="worktable-panel reports-two-column">
          <div>
            <div class="erp-panel-title">
              <div>
                <h3>字段字典</h3>
                <p>避免每个模块各自写一套状态词。</p>
              </div>
            </div>
            <div class="settings-list">
              ${settingsFieldRows
                .map(
                  ([name, values, used]) => `
                    <div>
                      <strong>${name}</strong>
                      <span>${values}</span>
                      <em>${used}</em>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
          <div>
            <div class="erp-panel-title">
              <div>
                <h3>通知策略</h3>
                <p>任务派发要靠规则和通知，不靠人工记得同步。</p>
              </div>
            </div>
            <div class="settings-list">
              ${settingsNotifyRows
                .map(
                  ([name, condition, target, status]) => `
                    <div>
                      <strong>${name}</strong>
                      <span>${condition}</span>
                      <small>${target}</small>
                      <em>${status}</em>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
        </section>

        <section class="worktable-panel">
          <div class="erp-panel-title">
            <div>
              <h3>操作审计</h3>
              <p>所有规则、权限、字段和关键金额变更都要留下可追溯记录。</p>
            </div>
          </div>
          <div class="editor-table compact">
            <div class="editor-table-row settings-audit-row header">
              <div>时间</div>
              <div>模块</div>
              <div>动作</div>
              <div>操作者</div>
              <div>状态</div>
            </div>
            ${settingsAuditRows
              .map(
                ([time, moduleName, action, operator, status]) => `
                  <div class="editor-table-row settings-audit-row">
                    <div>${time}</div>
                    <div><strong>${moduleName}</strong></div>
                    <div>${action}</div>
                    <div>${operator}</div>
                    <div><span class="state-tag">${status}</span></div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>
      </section>

      <aside class="editor-rail">
        <section class="rail-panel">
          <div class="rail-title">
            <strong>设置定位</strong>
            <span>管理员</span>
          </div>
          <div class="rail-task-list">
            <div class="rail-task"><strong>不做业务入口</strong><span>员工每天不从设置开始工作</span></div>
            <div class="rail-task"><strong>统一口径</strong><span>角色、字段、通知、阈值在这里配置</span></div>
            <div class="rail-task"><strong>防止黑箱</strong><span>权限和规则变更必须进审计日志</span></div>
          </div>
        </section>
        <section class="rail-panel">
          <div class="rail-title">
            <strong>后续参数</strong>
            <span>待配置</span>
          </div>
          <div class="sync-list">
            <div class="sync-row"><div><strong>低余额阈值</strong><span>账户余额低于多少触发提醒</span></div><em>待配置</em></div>
            <div class="sync-row"><div><strong>ROI 阈值</strong><span>低于多少进入投手调控任务</span></div><em>待配置</em></div>
            <div class="sync-row"><div><strong>同步频率</strong><span>飞书、绿联、后台采集间隔</span></div><em>待配置</em></div>
          </div>
        </section>
      </aside>
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

  if (activeModuleId === "cockpit") {
    const editorTarget = editorProfiles.reduce((sum, item) => sum + item.target, 0);
    const editorUploaded = editorProfiles.reduce((sum, item) => sum + item.uploaded, 0);
    if (topbarAlertButton) {
      topbarAlertButton.innerHTML = `<i data-lucide="bell"></i>${cockpitRiskRows.length} 个管理异常`;
    }
    metricGrid.innerHTML = `
      <article class="metric-card">
        <span>月度销售额</span>
        <strong>待采集</strong>
        <small>后台自动采集后展示</small>
      </article>
      <article class="metric-card">
        <span>昨日销售额</span>
        <strong>待采集</strong>
        <small>商品卡 / 切片拆分</small>
      </article>
      <article class="metric-card">
        <span>员工完成进度</span>
        <strong>${editorUploaded}/${editorTarget}</strong>
        <small>剪辑上传进度；投手进度待采集</small>
      </article>
      <article class="metric-card">
        <span>管理异常</span>
        <strong>${cockpitRiskRows.length}</strong>
        <small class="down">需要今天介入</small>
      </article>
    `;
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

  if (activeModuleId === "editorDesk") {
    const totalTarget = editorProfiles.reduce((sum, item) => sum + item.target, 0);
    const totalUploaded = editorProfiles.reduce((sum, item) => sum + item.uploaded, 0);
    const totalLeft = totalTarget - totalUploaded;
    if (topbarAlertButton) {
      topbarAlertButton.innerHTML = `<i data-lucide="bell"></i>${editorRevisionRows.length} 条卡审修改`;
    }
    metricGrid.innerHTML = `
      <article class="metric-card">
        <span>卡审修改</span>
        <strong>${editorRevisionRows.length}</strong>
        <small class="down">投手推送后剪辑优先处理</small>
      </article>
      <article class="metric-card">
        <span>今日要求数量</span>
        <strong>${totalTarget}</strong>
        <small>按组长分配到人</small>
      </article>
      <article class="metric-card">
        <span>已上传绿联</span>
        <strong>${totalUploaded}</strong>
        <small>待接绿联云盘自动确认</small>
      </article>
      <article class="metric-card">
        <span>剩余素材</span>
        <strong>${totalLeft}</strong>
        <small>不涉及台账和日报</small>
      </article>
    `;
    return;
  }

  if (activeModuleId === "materials") {
    if (topbarAlertButton) {
      topbarAlertButton.innerHTML = `<i data-lucide="bell"></i>绿联云盘待接`;
    }
    metricGrid.innerHTML = `
      <article class="metric-card">
        <span>历史文件夹</span>
        <strong>${materialFolderRows.length}</strong>
        <small>绿联云盘路径待接</small>
      </article>
      <article class="metric-card">
        <span>素材记录</span>
        <strong>${materialHistoryRows.length}</strong>
        <small>历史素材、修改和上传状态</small>
      </article>
      <article class="metric-card">
        <span>人员分类</span>
        <strong>4</strong>
        <small>按剪辑/负责人查看</small>
      </article>
      <article class="metric-card">
        <span>可复用素材</span>
        <strong>待识别</strong>
        <small>后续按表现和标签筛选</small>
      </article>
    `;
    return;
  }

  if (activeModuleId === "finance") {
    if (topbarAlertButton) {
      topbarAlertButton.innerHTML = `<i data-lucide="bell"></i>本月收支待采集`;
    }
    metricGrid.innerHTML = `
      <article class="metric-card">
        <span>本月支付金额</span>
        <strong>待采集</strong>
        <small>卖货整体支付金额</small>
      </article>
      <article class="metric-card">
        <span>本月有效收入</span>
        <strong>待采集</strong>
        <small>剔除退款和异常</small>
      </article>
      <article class="metric-card">
        <span>本月总支出</span>
        <strong>待汇总</strong>
        <small>投流、物料、账户、刷粉、其他</small>
      </article>
      <article class="metric-card">
        <span>支出种类</span>
        <strong>${financeExpenseRows.length}</strong>
        <small>按费用类型归类</small>
      </article>
    `;
    return;
  }

  if (activeModuleId === "accounts") {
    const uniqueCount = uniqueRows(realAccountRows).length;
    if (topbarAlertButton) {
      topbarAlertButton.innerHTML = `<i data-lucide="bell"></i>${getAbnormalRows(realAccountRows).length} 个账户异常`;
    }
    metricGrid.innerHTML = `
      <article class="metric-card">
        <span>全部账户</span>
        <strong>${uniqueCount}</strong>
        <small>已读取账户资产清单</small>
      </article>
      <article class="metric-card">
        <span>商品卡账户</span>
        <strong>${realAccountRows.filter((row) => row.账户类型 === "商品卡").length}</strong>
        <small>商品卡投放相关</small>
      </article>
      <article class="metric-card">
        <span>切片账户</span>
        <strong>${realAccountRows.filter((row) => row.账户类型 === "切片").length}</strong>
        <small>达人/切片投放相关</small>
      </article>
      <article class="metric-card">
        <span>账户异常</span>
        <strong>${getAbnormalRows(realAccountRows).length}</strong>
        <small class="down">待自动采集核对</small>
      </article>
    `;
    return;
  }

  if (activeModuleId === "reports") {
    const pendingSyncCount = reportLedgerRows.filter((row) => row[5].includes("待同步") || row[5].includes("暂存")).length;
    const manualPendingCount = reportLedgerRows.filter((row) => row[3].includes("待填写") || row[3].includes("待采集")).length;
    if (topbarAlertButton) {
      topbarAlertButton.innerHTML = `<i data-lucide="bell"></i>${pendingSyncCount} 条待同步`;
    }
    metricGrid.innerHTML = `
      <article class="metric-card">
        <span>账务记录</span>
        <strong>${reportLedgerRows.length}</strong>
        <small>系统内记录库</small>
      </article>
      <article class="metric-card">
        <span>待补真实金额</span>
        <strong>${manualPendingCount}</strong>
        <small>待采集 / 待填写</small>
      </article>
      <article class="metric-card">
        <span>飞书待同步</span>
        <strong>${pendingSyncCount}</strong>
        <small>接口未接，不伪装完成</small>
      </article>
      <article class="metric-card">
        <span>同步表</span>
        <strong>${reportSyncRows.length}</strong>
        <small>收入、支出、报销、投流</small>
      </article>
    `;
    return;
  }

  if (activeModuleId === "automation") {
    const pendingWorkflowCount = automationWorkflowRows.filter((row) => row[4].includes("待")).length;
    const pendingRuleCount = automationRuleRows.filter((row) => row[5].includes("待")).length;
    if (topbarAlertButton) {
      topbarAlertButton.innerHTML = `<i data-lucide="bell"></i>${automationHandoffRows.length} 类接管场景`;
    }
    metricGrid.innerHTML = `
      <article class="metric-card">
        <span>自动化工作流</span>
        <strong>${automationWorkflowRows.length}</strong>
        <small>账户、素材、台账、同步</small>
      </article>
      <article class="metric-card">
        <span>核心规则</span>
        <strong>${automationRuleRows.length}</strong>
        <small>触发条件 -> 系统动作</small>
      </article>
      <article class="metric-card">
        <span>待接 / 待配置</span>
        <strong>${pendingWorkflowCount + pendingRuleCount}</strong>
        <small>当前不伪装完成</small>
      </article>
      <article class="metric-card">
        <span>人工接管</span>
        <strong>${automationHandoffRows.length}</strong>
        <small>失败后生成待办</small>
      </article>
    `;
    return;
  }

  if (activeModuleId === "system") {
    if (topbarAlertButton) {
      topbarAlertButton.innerHTML = `<i data-lucide="shield-check"></i>管理员配置`;
    }
    metricGrid.innerHTML = `
      <article class="metric-card">
        <span>角色模板</span>
        <strong>${settingsRoleRows.length}</strong>
        <small>管理者、投手、剪辑、财务</small>
      </article>
      <article class="metric-card">
        <span>字段字典</span>
        <strong>${settingsFieldRows.length}</strong>
        <small>统一状态和分类口径</small>
      </article>
      <article class="metric-card">
        <span>通知策略</span>
        <strong>${settingsNotifyRows.length}</strong>
        <small>异常自动推给对应人</small>
      </article>
      <article class="metric-card">
        <span>审计记录</span>
        <strong>${settingsAuditRows.length}</strong>
        <small>规则和配置变更留痕</small>
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
  if (activeModuleId === "cockpit") {
    todoList.innerHTML = [
      ["看月度数据", "销售额、ROI、利润等待后台自动采集"],
      ["看昨日数据", "昨日销售、消耗、ROI 异常统一汇总"],
      ["看员工进度", "投手看账户处理，剪辑看素材上传"],
      ["处理异常", "账户采集、卡审积压、绿联未接是当前优先事项"],
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

  if (activeModuleId === "editorDesk") {
    const totalTarget = editorProfiles.reduce((sum, item) => sum + item.target, 0);
    const totalUploaded = editorProfiles.reduce((sum, item) => sum + item.uploaded, 0);
    todoList.innerHTML = [
      [`先处理卡审修改`, `${editorRevisionRows.length} 条来自投手推送的卡审问题`],
      [`完成今日剪辑数量`, `已上传 ${totalUploaded} / 要求 ${totalTarget}`],
      [`上传绿联云盘`, `按剪辑姓名和项目路径自动确认进度`],
      [`检查销售归因`, `后台素材名含剪辑姓名，待自动采集个人销售额`],
      [`剪映入口`, `优先内置剪映，做不到先提供跳转按钮`],
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

  if (activeModuleId === "materials") {
    todoList.innerHTML = [
      ["接入绿联云盘", "读取文件夹、文件数、上传人、上传时间"],
      ["按人查看素材", "查看每个剪辑/负责人所有历史素材"],
      ["按类型分类", "精剪、卡审、拍摄、封面、低质搬运"],
      ["保留历史记录", "方便查找旧素材、修改记录和上传状态"],
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

  if (activeModuleId === "finance") {
    todoList.innerHTML = [
      ["看本月收入", "整体支付金额和有效收入金额"],
      ["看本月支出", "投流、物料、账户、刷粉和其他费用"],
      ["补费用记录", "物料购买、账户购买、刷粉数量"],
      ["查历史记录", "后续查询费用、负责人和状态"],
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

  if (activeModuleId === "accounts") {
    todoList.innerHTML = [
      ["查看账户总数", "所有账户集中列表展示"],
      ["按分类查看", "商品卡、切片、未归类等分类"],
      ["核对异常账户", "状态异常和低余额账户需要确认"],
      ["等待自动采集", "内置浏览器采集余额、登录态、账户状态"],
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

  if (activeModuleId === "reports") {
    todoList.innerHTML = [
      ["补真实金额", "待采集 / 待填写的记录先不填假数"],
      ["校验账务字段", "日期、类型、费用项目、金额状态、同步状态统一口径"],
      ["同步飞书队列", "系统账务库确认后再推送到飞书表格 / 多维表"],
      ["失败人工接管", "同步失败、字段缺失、权限异常生成财务待办"],
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

  if (activeModuleId === "automation") {
    todoList.innerHTML = [
      ["先接账户巡检", "打开千川账户后采集余额、状态、ROI 和卡审提示"],
      ["配置卡审转交", "卡审失败同步推送投手和对应剪辑"],
      ["保留执行日志", "每次自动采集、派发、同步都要可追溯"],
      ["设置接管规则", "字段缺失、低置信、同步失败时交给人确认"],
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

  if (activeModuleId === "system") {
    todoList.innerHTML = [
      ["配置角色权限", "先固化管理者、投手、剪辑、财务四类权限"],
      ["统一字段字典", "账户状态、素材状态、费用类型、同步状态统一口径"],
      ["配置通知策略", "低余额、卡审失败、同步失败要推给对应人"],
      ["保留审计日志", "规则、字段、权限和金额变更都要可追溯"],
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
    tablePanel.classList.toggle(
      "hidden",
      ["cockpit", "buyerDesk", "editorDesk", "materials", "accounts", "finance", "reports", "automation", "system"].includes(activeModuleId),
    );
  }

  if (["cockpit", "buyerDesk", "editorDesk", "materials", "accounts", "finance", "reports", "automation", "system"].includes(activeModuleId)) {
    operationTable.innerHTML = "";
    return;
  }

  const rows = historyRows.filter((item, index) => activeFilter === "all" || (activeFilter === "p0" && index < 2) || activeFilter === "p1" || activeFilter === "p2");

  operationTable.innerHTML = `
    <div class="table-row header">
      <div class="table-cell">时间</div>
      <div class="table-cell">模块</div>
      <div class="table-cell">记录</div>
      <div class="table-cell">来源</div>
      <div class="table-cell">状态</div>
    </div>
    ${rows
      .map(
        ([time, module, record, source, status]) => `
          <div class="table-row">
            <div class="table-cell">${time}</div>
            <div class="table-cell"><strong>${module}</strong></div>
            <div class="table-cell">${record}</div>
            <div class="table-cell">${source}</div>
            <div class="table-cell"><span class="state-tag">${status}</span></div>
          </div>
        `,
      )
      .join("")}
  `;
}

function renderDetails() {
  const item = getActiveModule();
  pageTitle.textContent = item.title;
  if (pageEyebrow) {
    pageEyebrow.textContent =
      activeModuleId === "buyerDesk"
        ? "业务中台 / 投手工作台 / 今日账户处理"
        : activeModuleId === "editorDesk"
          ? "业务中台 / 剪辑工作台 / 今日素材生产"
          : activeModuleId === "materials"
            ? "业务中台 / 素材中心 / 历史素材与绿联云盘"
            : activeModuleId === "accounts"
              ? "业务中台 / 账户中心 / 全部账户列表"
            : activeModuleId === "finance"
              ? "业务中台 / 财务模块 / 费用与购买记录"
            : activeModuleId === "reports"
              ? "业务中台 / 数据报表 / 账务集合与飞书同步"
            : activeModuleId === "automation"
              ? "业务中台 / 自动化中心 / 规则与执行控制台"
            : activeModuleId === "system"
              ? "业务中台 / 系统设置 / 权限字段与审计"
          : activeModuleId === "cockpit"
            ? "业务中台 / 管理驾驶舱 / 整体数据一览"
            : `业务中台 / ${item.title}`;
  }
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
  document.body.classList.toggle("cockpit-mode", activeModuleId === "cockpit");
  document.body.classList.toggle("buyer-erp-mode", activeModuleId === "buyerDesk");
  document.body.classList.toggle("editor-desk-mode", activeModuleId === "editorDesk");
  document.body.classList.toggle("materials-mode", activeModuleId === "materials");
  document.body.classList.toggle("accounts-mode", activeModuleId === "accounts");
  document.body.classList.toggle("finance-mode", activeModuleId === "finance");
  document.body.classList.toggle("reports-mode", activeModuleId === "reports");
  document.body.classList.toggle("automation-mode", activeModuleId === "automation");
  document.body.classList.toggle("settings-mode", activeModuleId === "system");
  renderNav();
  renderMetrics();
  if (activeModuleId === "cockpit") {
    renderCockpit();
  } else if (activeModuleId === "buyerDesk") {
    renderBuyerDesk();
  } else if (activeModuleId === "editorDesk") {
    renderEditorDesk();
  } else if (activeModuleId === "materials") {
    renderMaterials();
  } else if (activeModuleId === "accounts") {
    renderAccounts();
  } else if (activeModuleId === "finance") {
    renderFinance();
  } else if (activeModuleId === "reports") {
    renderReports();
  } else if (activeModuleId === "automation") {
    renderAutomation();
  } else if (activeModuleId === "system") {
    renderSettings();
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
