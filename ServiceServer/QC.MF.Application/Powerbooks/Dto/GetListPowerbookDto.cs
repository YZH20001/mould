using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Powerbooks.Dto
{
    [AutoMap(typeof(Powerbook))]
    public class GetListPowerbookDto : CreatePowerbookDto, IEntityDto<int>
    {
        public int Id { get ; set; }
    }
}
