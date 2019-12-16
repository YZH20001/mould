using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.KailiApplyBooks.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.KailiApplyBooks
{
    public class KailiApplyBookAppService : AsyncMFCrudAppService<KailiApplyBook, GetListKailiApplyBookDto, PagedSortedAndFilteredInputDto, CreateKailiApplyBookDto, UpdateKailiApplyBookDto>, IKailiApplyBookAppService
    {
        public KailiApplyBookAppService(IRepository<KailiApplyBook, int> repository) : base(repository)
        {
               
        }
    }
}
