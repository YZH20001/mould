using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Shouquanshus.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shouquanshus
{
    public class ShouquanshuAppService : AsyncMFCrudAppService<Shouquanshu, GetListShouquanshuDto, PagedSortedAndFilteredInputDto, CreateShouquanshuDto, UpdateShouquanshuDto>, IShouquanshuAppService
    {
        public ShouquanshuAppService(IRepository<Shouquanshu, int> repository) : base(repository)
        {
        }
    }
}
