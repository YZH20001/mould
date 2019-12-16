using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using QC.MF.Shenqingshu.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shenqingshu.Dto
{
    [AutoMap(typeof(QC.MF.Shenqingshu.Shenqingshu))]
    public class UpdateShenqingshuDto : CreateShenqingshuDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
