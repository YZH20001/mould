using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Jszhsqshus.Dto
{
    public class GetListJszhsqshuDto : CreateJszhsqshuDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
