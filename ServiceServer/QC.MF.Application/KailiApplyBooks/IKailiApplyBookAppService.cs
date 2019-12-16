using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.KailiApplyBooks.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.KailiApplyBooks
{
    public interface IKailiApplyBookAppService : IAsyncCrudAppService<GetListKailiApplyBookDto, int, PagedSortedAndFilteredInputDto, CreateKailiApplyBookDto, UpdateKailiApplyBookDto>
    {
    }
}
