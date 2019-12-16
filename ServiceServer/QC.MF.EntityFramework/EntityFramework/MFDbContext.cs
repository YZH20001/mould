using System.Data.Common;
using System.Data.Entity;
using Abp.Zero.EntityFramework;
using QC.MF.Authorization.Roles;
using QC.MF.Authorization.Users;
using QC.MF.MultiTenancy;
using System.Data.Entity;
using QC.MF.Authorization.ThirdParty;
using QC.MF.Storage;
using QC.MF.VerificationCodes;
using QC.MF.Friendships;
using QC.MF.Chat;
using QC.MF.Demos;
using QC.MF.WebFiles;
using QC.MF.AppEditions;
using QC.MF.AppStartPages;
using QC.MF.Powerbooks;
using QC.MF.Ywdlsqbiaos;
using QC.MF.Xianjinjiaokuandans;
using QC.MF.Shouqunweituoshus1;
using QC.MF.Shouqunweituoshus2;
using QC.MF.Jszhsqshus;
using QC.MF.danweixinxidengjibiao;
using QC.MF.Registrations;
using QC.MF.Shouquanshus;
using QC.MF.Bgyhjszhsqss;
using QC.MF.Shenqingshu;
using QC.MF.KailiApplyBooks;

namespace QC.MF.EntityFramework
{
    public class MFDbContext : AbpZeroDbContext<Tenant, Role, User>
    {
        //TODO: Define an IDbSet for your Entities...
        public IDbSet<Menus.Menu> Menus { get; set; }
        public IDbSet<VerificationCode> VerificationCodes { get; set; }

        public virtual IDbSet<Friendship> Friendships { get; set; }

        public virtual IDbSet<ChatMessage> ChatMessages { get; set; }

        public IDbSet<ThirdPartyUser> ThirdPartyUsers { get; set; }
        public IDbSet<WebFile> WebFile { get; set; }
        public IDbSet<AppEdition> AppEdition { get; set; }
        public IDbSet<Demo> Demo { get; set; }
        public IDbSet<FileSettingDemo> GetSetDemo { get; set; }
        public IDbSet<AppStartPage> AppStartPage { get; set; }
        public IDbSet<Ywdlsqbiao> Ywdlsqbiao { get; set; }
        public IDbSet<Xianjinjiaokuandan> Xianjinjiaokuandan { get; set; }
        public IDbSet<Powerbook> Powerbook { get; set; }
        public IDbSet<Registration> Registration { get; set; }
        public IDbSet<KailiApplyBook> KailiApplyBook { get; set; }

        public IDbSet<Jingzhangdan.Jingzhangdan> Jingzhangdan { get; set; }
        public IDbSet<QC.MF.Shouqunweituoshus1.Shouqunweituoshus1> Shouqunweituoshus1 { get; set; }
        public IDbSet<QC.MF.Shouqunweituoshus2.Shouqunweituoshus2> Shouqunweituoshus2 { get; set; }
        public IDbSet<Shenqingshu.Shenqingshu> Shenqingshu { get; set; }

        public IDbSet<Jszhsqshu> Jszhsqshu { get; set; }
        public IDbSet<Shouquanshu> Shouquanshu { get; set; }

        public IDbSet<Danweixinxidengjibiao> Danweixinxidengjibiao { get; set; }
        public IDbSet<Yewujiesuanshenqingshu.Yewujiesuanshenqingshu> Yewujiesuanshenqingshu { get; set; }
        public IDbSet<Bgyhjszhsqs> Bgyhjszhsqs { get; set; }
        /* NOTE: 
         *   Setting "Default" to base class helps us when working migration commands on Package Manager Console.
         *   But it may cause problems when working Migrate.exe of EF. If you will apply migrations on command line, do not
         *   pass connection string name to base classes. ABP works either way.
         */
        public virtual IDbSet<BinaryObject> BinaryObjects { get; set; }

        public MFDbContext()
            : base("Default")
        {

        }

        /* NOTE:
         *   This constructor is used by ABP to pass connection string defined in MFDataModule.PreInitialize.
         *   Notice that, actually you will not directly create an instance of MFDbContext since ABP automatically handles it.
         */
        public MFDbContext(string nameOrConnectionString)
            : base(nameOrConnectionString)
        {

        }

        //This constructor is used in tests
        public MFDbContext(DbConnection existingConnection)
         : base(existingConnection, false)
        {

        }

        public MFDbContext(DbConnection existingConnection, bool contextOwnsConnection)
         : base(existingConnection, contextOwnsConnection)
        {

        }
    }
}
