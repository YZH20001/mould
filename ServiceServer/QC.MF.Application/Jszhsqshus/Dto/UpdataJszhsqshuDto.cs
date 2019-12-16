using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Jszhsqshus.Dto
{
    [AutoMap(typeof(Jszhsqshu))]
  public   class UpdataJszhsqshuDto: CreateJszhsqshuDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
