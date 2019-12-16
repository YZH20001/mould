using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Bgyhjszhsqss.Dto
{
   public class GetListBgyhjszhsqsDto : CreateBgyhjszhsqsDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
