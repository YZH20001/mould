using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using QC.MF.Demos.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Xianjinjiaokuandan.Dto
{
    [AutoMap(typeof(XianjinjiaokuandanAppService))]
    public class UpdateXianjinjiaokuandanDto : CreateXianjinjiaokuandanDto, IEntityDto<int>
    {
        
        public int Id { get;set; }
    }
}
