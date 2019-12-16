using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using QC.MF.Shouqunweituoshus2.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shouqunweituoshus2.Dto
{
    [AutoMap(typeof(QC.MF.Shouqunweituoshus1.Shouqunweituoshus1))]
    public class UpdateShouquanweituoshu2Dto : CreateShouqunweituoshus2Dto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
