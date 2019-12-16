namespace QC.MF.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class merge1104 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Bgyhjszhsqs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Customername = c.String(),
                        Bankcode = c.String(),
                        Accountnumber = c.String(),
                        Natureofaccount = c.String(),
                        Accountopennumber = c.String(),
                        Changesas = c.String(),
                        Customername1 = c.String(),
                        Address = c.String(),
                        Postalcode = c.String(),
                        Phonenumber = c.String(),
                        Registered = c.String(),
                        Typeof = c.String(),
                        Documentnumber = c.String(),
                        Businessscope = c.String(),
                        Legal = c.String(),
                        Name = c.String(),
                        Typedocument = c.String(),
                        Idnumber = c.String(),
                        Affiliated = c.String(),
                        Dengjibiao = c.String(),
                        Thesuperior = c.String(),
                        Thename = c.String(),
                        Headofunit = c.String(),
                        Name1 = c.String(),
                        Typedocument1 = c.String(),
                        Idnumber1 = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Bgyhjszhsqs_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Danweixinxidengjibiaos",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Company = c.String(),
                        Code = c.String(),
                        Information = c.String(),
                        Shareholders = c.String(),
                        Shareholders1 = c.String(),
                        Shareholders2 = c.String(),
                        Shareholders3 = c.String(),
                        Identity = c.String(),
                        Identity1 = c.String(),
                        Identity2 = c.String(),
                        Identity3 = c.String(),
                        Number = c.String(),
                        Number1 = c.String(),
                        Number2 = c.String(),
                        Number3 = c.String(),
                        Date = c.String(),
                        Date1 = c.String(),
                        Date2 = c.String(),
                        Date3 = c.String(),
                        Proportion = c.String(),
                        Proportion1 = c.String(),
                        Proportion2 = c.String(),
                        Proportion3 = c.String(),
                        Or = c.String(),
                        Or1 = c.String(),
                        Or2 = c.String(),
                        Or3 = c.String(),
                        Benefiviary = c.String(),
                        Type = c.String(),
                        Type1 = c.String(),
                        Type2 = c.String(),
                        Type3 = c.String(),
                        Name = c.String(),
                        Name1 = c.String(),
                        Name2 = c.String(),
                        Name3 = c.String(),
                        Identity4 = c.String(),
                        Identity5 = c.String(),
                        Identity6 = c.String(),
                        Identity7 = c.String(),
                        Numbe4 = c.String(),
                        Number5 = c.String(),
                        Number6 = c.String(),
                        Number7 = c.String(),
                        Date4 = c.String(),
                        Date5 = c.String(),
                        Date6 = c.String(),
                        Date7 = c.String(),
                        Address = c.String(),
                        Address1 = c.String(),
                        Address2 = c.String(),
                        Address3 = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Danweixinxidengjibiao_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Jingzhangdans",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Year = c.Int(nullable: false),
                        Month = c.Int(nullable: false),
                        Day = c.Int(nullable: false),
                        Chupiaorenqc = c.String(),
                        Chupiaorenzh = c.String(),
                        Chupiaorenkhyh = c.String(),
                        Shoukuanrenqc = c.String(),
                        Shoukuanrenzh = c.String(),
                        Shoukuanrenkhyh = c.String(),
                        Renminbi = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Piaojuzhonglei = c.String(),
                        Piaojuzhangshu = c.Int(nullable: false),
                        Piaojuhaoma = c.Int(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Jingzhangdan_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Jszhsqshus",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Accounttitle = c.String(),
                        Bankname = c.String(),
                        Bankcode = c.String(),
                        Account = c.String(),
                        Naturezccount = c.String(),
                        Basic = c.String(),
                        Special = c.String(),
                        General = c.String(),
                        Temporary = c.String(),
                        Personal = c.String(),
                        Accountnumber = c.String(),
                        Pinreasons = c.String(),
                        Voucher = c.String(),
                        Species = c.String(),
                        Anumberof = c.String(),
                        Allnumbers = c.String(),
                        Fillingexplanation = c.String(),
                        Year = c.Int(nullable: false),
                        Month = c.Int(nullable: false),
                        Day = c.Int(nullable: false),
                        Year1 = c.Int(nullable: false),
                        Month1 = c.Int(nullable: false),
                        Day1 = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.KailiApplyBooks",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Sname = c.String(),
                        PhoneNumber = c.String(),
                        Address = c.String(),
                        PostCode = c.String(),
                        DepositorsType = c.String(),
                        Organization = c.String(),
                        FadingAndDanwei = c.String(),
                        Name = c.String(),
                        PaperType = c.String(),
                        PaperNumber = c.String(),
                        Industry = c.String(),
                        Zijin = c.String(),
                        AddressDaima = c.String(),
                        Business = c.String(),
                        PaperWenjian = c.String(),
                        PaperBianhao = c.String(),
                        Tax = c.String(),
                        ZhangHuNature = c.String(),
                        ZiJiNature = c.String(),
                        Year = c.Int(nullable: false),
                        Moth = c.Int(nullable: false),
                        Day = c.Int(nullable: false),
                        DirectorName = c.String(),
                        CunkuanZhangHu = c.String(),
                        ZuZhiJiGou = c.String(),
                        FadingDaiBiao = c.String(),
                        FadingDaiBiaoName = c.String(),
                        FadingDaiBiaoType = c.String(),
                        FadingDaiBiaoNumber = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_KailiApplyBook_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Powerbooks",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Sname = c.String(),
                        Name_1 = c.String(),
                        Type_1 = c.String(),
                        Number_1 = c.String(),
                        PhoneNumber_1 = c.String(),
                        Name_2 = c.String(),
                        Type_2 = c.String(),
                        Number_2 = c.String(),
                        PhoneNumber_2 = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Powerbook_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Registrations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Year_1 = c.Int(nullable: false),
                        Month_1 = c.Int(nullable: false),
                        Day_1 = c.Int(nullable: false),
                        Name_1 = c.String(),
                        Name_pinyin = c.String(),
                        Gender_1 = c.String(),
                        Nationality_1 = c.String(),
                        PhoneNumber = c.String(),
                        Type_1 = c.String(),
                        Number_1 = c.String(),
                        Year_2 = c.Int(nullable: false),
                        Month_2 = c.Int(nullable: false),
                        Day_2 = c.Int(nullable: false),
                        License = c.String(),
                        Often_address1 = c.String(),
                        Often_address2 = c.String(),
                        Often_address3 = c.String(),
                        Unit_address1 = c.String(),
                        Unit_address2 = c.String(),
                        Unit_address3 = c.String(),
                        Professional = c.String(),
                        Tax = c.String(),
                        Number_2 = c.String(),
                        Name_2 = c.String(),
                        Gender_2 = c.String(),
                        Nationality_2 = c.String(),
                        Type_2 = c.String(),
                        Number_3 = c.String(),
                        Year_3 = c.Int(nullable: false),
                        Month_3 = c.Int(nullable: false),
                        Day_3 = c.Int(nullable: false),
                        License2 = c.String(),
                        PhoneNumber2 = c.String(),
                        Province = c.String(),
                        City = c.String(),
                        Area = c.String(),
                        Type_3 = c.String(),
                        Why = c.String(),
                        Marriage = c.String(),
                        Record = c.String(),
                        Family_number = c.String(),
                        Industry = c.String(),
                        Unit_name = c.String(),
                        Unit_number = c.String(),
                        Email = c.String(),
                        Professiona2 = c.String(),
                        Product = c.String(),
                        Type_4 = c.String(),
                        Indicate = c.String(),
                        Type_number = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Registration_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Shenqingshus",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AccountName = c.String(),
                        AccountNumber = c.String(),
                        Money = c.String(),
                        Account = c.String(),
                        WithdrawalDate = c.String(),
                        Number = c.String(),
                        VoucherNumber = c.String(),
                        Liushuihao = c.String(),
                        Zhonglei = c.String(),
                        Haoma = c.String(),
                        Jianer = c.String(),
                        Shoukuanren = c.String(),
                        Chupiaoriqi = c.String(),
                        Daoqiri = c.String(),
                        Sangshishijian = c.String(),
                        Didian = c.String(),
                        Yuanyin = c.String(),
                        Jiezhiriqi = c.String(),
                        Shuoming = c.String(),
                        Biangengyuanyin = c.String(),
                        Zhuzhanghao = c.String(),
                        Yuanzhanghao = c.String(),
                        Xinzhanghao = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Shouquanshus",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Zhihang = c.String(),
                        Name = c.String(),
                        Idcard = c.String(),
                        Telephonenumber = c.String(),
                        Other = c.String(),
                        Year = c.Int(nullable: false),
                        Month = c.Int(nullable: false),
                        Day = c.Int(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Shouquanshu_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Shouqunweituoshus1",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BankName = c.String(),
                        Name = c.String(),
                        IdType = c.String(),
                        IdNumber = c.String(),
                        Post = c.String(),
                        Seal = c.String(),
                        Phone = c.String(),
                        BingXing = c.String(),
                        FeiZhi = c.String(),
                        Nian = c.String(),
                        Yue = c.String(),
                        Ri = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Shouqunweituoshus2",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BankName = c.String(),
                        Name = c.String(),
                        IdType = c.String(),
                        IdNumber = c.String(),
                        Department = c.String(),
                        Post = c.String(),
                        Add = c.String(),
                        BianGeng = c.String(),
                        ShanXiao = c.String(),
                        MiZhi = c.String(),
                        MiJie = c.String(),
                        QianYue = c.String(),
                        JieYue = c.String(),
                        HuanBu = c.String(),
                        ZengHao = c.String(),
                        CheXiao = c.String(),
                        XiuGai = c.String(),
                        GouMai = c.String(),
                        ShuHui = c.String(),
                        FengGu = c.String(),
                        DaoDong = c.String(),
                        ZhiHuan = c.String(),
                        BuFa = c.String(),
                        Other = c.String(),
                        Nian = c.String(),
                        Yue = c.String(),
                        Ri = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Xianjinjiaokuandans",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nian = c.String(),
                        Yue = c.String(),
                        Ri = c.String(),
                        AccountName = c.String(),
                        AccountNumber = c.String(),
                        OpeningBank = c.String(),
                        Abstract = c.String(),
                        Money = c.String(),
                        BankSpecialColumn = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Yewujiesuanshenqingshus",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Year = c.Int(nullable: false),
                        Month = c.Int(nullable: false),
                        Day = c.Int(nullable: false),
                        Designation = c.String(),
                        Account = c.String(),
                        Telephone = c.String(),
                        Account1 = c.String(),
                        Designation1 = c.String(),
                        Account2 = c.String(),
                        Provice = c.String(),
                        City = c.String(),
                        Account3 = c.String(),
                        Currency = c.String(),
                        Money = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Account4 = c.String(),
                        Pay = c.String(),
                        Nationality = c.String(),
                        Type = c.String(),
                        Professional = c.String(),
                        Number = c.String(),
                        Extra = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Yewujiesuanshenqingshu_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Ywdlsqbiaos",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Customername = c.String(),
                        Name = c.String(),
                        Certificatetype = c.String(),
                        Idnumber = c.Int(nullable: false),
                        Contactnumber = c.String(),
                        Name2 = c.String(),
                        Certificatetype2 = c.String(),
                        Idnumber2 = c.Int(nullable: false),
                        Contactnumber2 = c.String(),
                        Name1 = c.String(),
                        Certificatetype1 = c.String(),
                        Idnumber1 = c.Int(nullable: false),
                        Contactnumber1 = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Ywdlsqbiaos");
            DropTable("dbo.Yewujiesuanshenqingshus",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Yewujiesuanshenqingshu_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.Xianjinjiaokuandans");
            DropTable("dbo.Shouqunweituoshus2");
            DropTable("dbo.Shouqunweituoshus1");
            DropTable("dbo.Shouquanshus",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Shouquanshu_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.Shenqingshus");
            DropTable("dbo.Registrations",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Registration_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.Powerbooks",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Powerbook_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.KailiApplyBooks",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_KailiApplyBook_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.Jszhsqshus");
            DropTable("dbo.Jingzhangdans",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Jingzhangdan_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.Danweixinxidengjibiaos",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Danweixinxidengjibiao_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.Bgyhjszhsqs",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Bgyhjszhsqs_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
    }
}
