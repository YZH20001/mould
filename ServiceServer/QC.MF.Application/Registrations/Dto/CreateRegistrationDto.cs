using Abp.AutoMapper;
using QC.MF.Registrations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Registrations.Dto
{
    [AutoMap(typeof(Registration))]
    public class CreateRegistrationDto
    {
        public int Year_1 { get; set; }
        public int Month_1 { get; set; }
        public int Day_1 { get; set; }
        ///客户信息
        ///
        //姓名
        public string Name_1 { get; set; }
        //姓名拼音
        public string Name_pinyin { get; set; }
        //性别
        public string Gender_1 { get; set; }
        //国际/地区
        public string Nationality_1 { get; set; }
        //手机号码
        public string PhoneNumber { get; set; }
        //证件类型
        public string Type_1 { get; set; }
        //证件号码
        public string Number_1 { get; set; }
        //证件有效日期
        public int Year_2 { get; set; }
        public int Month_2 { get; set; }
        public int Day_2 { get; set; }
        //发证机关
        public string License { get; set; }
        //联系地址
        public string Often_address1 { get; set; }
        public string Often_address2 { get; set; }
        public string Often_address3 { get; set; }
        public string Unit_address1 { get; set; }
        public string Unit_address2 { get; set; }
        public string Unit_address3 { get; set; }
        //职业
        public string Professional { get; set; }
        //税收居民身份
        public string Tax { get; set; }

        ///美国纳税居民
        ///
        public string Number_2 { get; set; }

        ///代理人监护人信息
        ///
         //姓名
        public string Name_2 { get; set; }
        //性别
        public string Gender_2 { get; set; }
        //国际/地区
        public string Nationality_2 { get; set; }
        //证件类型
        public string Type_2 { get; set; }
        //证件号码
        public string Number_3 { get; set; }
        //证件有效日期
        public int Year_3 { get; set; }
        public int Month_3 { get; set; }
        public int Day_3 { get; set; }
        //发证机关
        public string License2 { get; set; }
        //手机号码
        public string PhoneNumber2 { get; set; }
        //联系地址
        public string Province { get; set; }
        public string City { get; set; }
        public string Area { get; set; }
        //类型
        public string Type_3 { get; set; }
        //代理原因
        public string Why { get; set; }

        ///客户补充信息
        ///
        //婚姻状况
        public string Marriage { get; set; }
        //学历
        public string Record { get; set; }
        //家庭电话
        public string Family_number { get; set; }
        //行业
        public string Industry { get; set; }
        //单位名称
        public string Unit_name { get; set; }
        //单位电话
        public string Unit_number { get; set; }
        //电子邮箱
        public string Email { get; set; }
        //职务
        public string Professiona2 { get; set; }
        //感兴趣的产品
        public string Product { get; set; }
        //辅助证件类型
        public string Type_4 { get; set; }
        //注明
        public string Indicate { get; set; }
        //辅助证件号码
        public string Type_number { get; set; }
    }
}
