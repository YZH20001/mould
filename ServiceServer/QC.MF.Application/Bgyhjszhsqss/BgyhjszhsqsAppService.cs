using Abp.Domain.Repositories;
using QC.MF.Bgyhjszhsqss.Dto;
using QC.MF.CommonDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Bgyhjszhsqss
{
   public class BgyhjszhsqsAppService : AsyncMFCrudAppService<Bgyhjszhsqs, GetListBgyhjszhsqsDto, PagedSortedAndFilteredInputDto, CreateBgyhjszhsqsDto, UpdataBgyhjszhsqsDto>, IBgyhjszhsqsAppService
    {
        public BgyhjszhsqsAppService(IRepository<Bgyhjszhsqs, int> repository) : base(repository)
        {

        }
    }
}
