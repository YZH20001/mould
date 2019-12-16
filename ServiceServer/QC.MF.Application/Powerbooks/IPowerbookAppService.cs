using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Powerbooks.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Powerbooks
{
   public interface IPowerbookAppService : IAsyncCrudAppService<GetListPowerbookDto, int, PagedSortedAndFilteredInputDto, CreatePowerbookDto, UpdatePowerbookDto>
    {
    }
}
