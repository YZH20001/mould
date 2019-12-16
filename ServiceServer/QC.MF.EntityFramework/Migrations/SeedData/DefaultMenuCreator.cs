using System.Collections.Generic;
using System.Linq;
using Abp.Localization;
using QC.MF.EntityFramework;
using QC.MF.Authorization;

namespace QC.MF.Migrations.SeedData
{
    public class DefaultMenuCreator
    {
        public static List<Menus.Menu> InitialMenus { get; private set; }
        private readonly MFDbContext _context;

        public DefaultMenuCreator(MFDbContext context)
        {
            _context = context;
        }
        static DefaultMenuCreator()
        {
            InitialMenus = new List<Menus.Menu>
            {
                new Menus.Menu
                {
                    DisplayName = "用户",
                    Icon = "user",
                    Order = 1,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/user",
                    RequiredPermissionName = PermissionNames.Pages_Administration_Users_Lookup
                },
                new Menus.Menu
                {
                    DisplayName = "角色",
                    Icon = "trademark",
                    Order = 2,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/role",
                    RequiredPermissionName = PermissionNames.Pages_Administration_Roles_Lookup
                },
                new Menus.Menu
                {
                    DisplayName = "组织机构",
                    Icon = "apple",
                    Order = 3,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/organization",
                    RequiredPermissionName = PermissionNames.Pages_Administration_OrganizationUnits_Lookup
                },
                new Menus.Menu
                {
                    DisplayName = "菜单",
                    Icon = "bars",
                    Order = 4,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/menu",
                    RequiredPermissionName = PermissionNames.Pages_Administration_Menus
                },
                new Menus.Menu
                {
                    DisplayName = "设置",
                    Icon = "setting",
                    Order = 5,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/configuration",
                    RequiredPermissionName = PermissionNames.Pages_Administration_Settings
                },
                new Menus.Menu
                {
                    DisplayName = "审计日志",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/auditLog",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "个人客户信息登记表",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/registration",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "单位信息登记表",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/danweixinxidengjibiao",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "开立单位银行结算账户申请书",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/kailiApplyBook",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "变更银行结算账户申请书",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/bgyhjszhsqss",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "撤销银行结算账户申请书",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/jszhsqshu",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "进账单",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/jiangzhangdan",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "现金交款单",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/xinjinjiaokuandan",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "结算业务申请书",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/yewujiesuanshenqingshu",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "电子银行业务办理授权书",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/shouquanshu",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "公司电子银行业务代理授权表",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/ywdlsqbiao",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "公司电子银行企业法定代表人授权书",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/powerbook",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "授权委托书（一）",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/shouqunweituoshu1",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                },
                new Menus.Menu
                {
                    DisplayName = "授权委托书（二）",
                    Icon = "solution",
                    Order = 6,
                    IsVisible = true,
                    Target = "_self",
                    IsSystem = true,
                    Url = "/shouqunweituoshu2",
                    RequiredPermissionName = PermissionNames.Pages_Administration_AuditLogs
                }
            };
        }

        public void Create()
        {
            AddMenuIfNotExists();
        }

        private void AddMenuIfNotExists()
        {
            foreach (var menu in InitialMenus)
            {
                if (_context.Menus.Any(l => l.Url == menu.Url))
                {
                    continue;
                }
                _context.Menus.Add(menu);
            }
            _context.SaveChanges();
        }
    }
}
