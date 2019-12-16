using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Shouqunweituoshu1.Dto;
using QC.MF.Shouqunweituoshus1.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shouqunweituoshu1
{
    public class Shouqunweituoshu1AppService : AsyncMFCrudAppService<Shouqunweituoshus1.Shouqunweituoshus1, GetListShouqunweituoshu1Dto, PagedSortedAndFilteredInputDto, CreateShouqunweituoshus1Dto, UpdateShouquanweituoshu1Dto>, IShouqunweituoshu1AppService
    {
        public Shouqunweituoshu1AppService(IRepository<Shouqunweituoshus1.Shouqunweituoshus1, int> repository) : base(repository)
        {
        }
    }
}

