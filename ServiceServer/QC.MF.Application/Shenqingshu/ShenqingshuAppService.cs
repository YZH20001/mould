using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Shenqingshu.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shenqingshu
{
    public class ShenqingshuAppService : AsyncMFCrudAppService<Shenqingshu, GetListShenqingshuDto, PagedSortedAndFilteredInputDto, CreateShenqingshuDto, UpdateShenqingshuDto>, IShenqingshuAppService
    {
        public ShenqingshuAppService(IRepository<Shenqingshu, int> repository) : base(repository)
        {
        }
    }
}

