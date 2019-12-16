using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Yewujiesuanshenqingshu;
using QC.MF.Yewujiesuanshenqingshus.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Yewujiesuanshenqingshus
{
    public class YewujiesuanshenqingshuAppService : AsyncMFCrudAppService<Yewujiesuanshenqingshu.Yewujiesuanshenqingshu, GetListYewujiesuanshenqingshuDto, PagedSortedAndFilteredInputDto, CreateYewujiesuanshenqingshuDto, UpdateYewujiesuanshenqingshuDto>, IYewujiesuanshenqingshuAppService
    {
        public YewujiesuanshenqingshuAppService(IRepository<Yewujiesuanshenqingshu.Yewujiesuanshenqingshu, int> repository) : base(repository)
        {
        }
    }
}
