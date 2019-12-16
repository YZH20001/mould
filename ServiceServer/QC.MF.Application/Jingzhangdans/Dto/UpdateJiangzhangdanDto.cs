using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using QC.MF.Demos.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Jingzhangdans.Dto
{
    [AutoMap(typeof(QC.MF.Jingzhangdan.Jingzhangdan))]
    public class UpdateJiangzhangdanDto : CreateJingzhangdanDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
