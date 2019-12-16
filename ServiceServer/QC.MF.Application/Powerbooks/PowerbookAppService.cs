using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Powerbooks.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Powerbooks
{
    public class PowerbookAppService : AsyncMFCrudAppService<Powerbook, GetListPowerbookDto, PagedSortedAndFilteredInputDto, CreatePowerbookDto, UpdatePowerbookDto>, IPowerbookAppService
    {
        public PowerbookAppService(IRepository<Powerbook,int> repository) : base(repository)
        {

        }
    }
}
