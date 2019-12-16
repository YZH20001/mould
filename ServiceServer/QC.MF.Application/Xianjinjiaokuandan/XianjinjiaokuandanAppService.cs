using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Xianjinjiaokuandan.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Xianjinjiaokuandan
{
    public class XianjinjiaokuandanAppService : AsyncMFCrudAppService<Xianjinjiaokuandans.Xianjinjiaokuandan, GetListXinjinjiaokuandanDto, PagedSortedAndFilteredInputDto, CreateXinjinjiaokuandanDto, UpdateXinjinjiaokuandanDto>, IXianjinjiaokuandanAppService
    {
        public XianjinjiaokuandanAppService(IRepository<Xianjinjiaokuandans.Xianjinjiaokuandan, int> repository) : base(repository)
        {
        }
    }
}
