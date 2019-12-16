using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Jszhsqshus.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Jszhsqshus
{
    public class JszhsqshuAppService : AsyncMFCrudAppService<Jszhsqshu, GetListJszhsqshuDto, PagedSortedAndFilteredInputDto, CreateJszhsqshuDto, UpdataJszhsqshuDto>, IJszhsqshuAppService
    {
        public JszhsqshuAppService(IRepository<Jszhsqshu, int> repository) : base(repository)
        {

        }
           
        }
    }

