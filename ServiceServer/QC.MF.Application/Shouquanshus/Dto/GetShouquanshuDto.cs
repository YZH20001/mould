using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shouquanshus.Dto
{
    [AutoMap(typeof(Shouquanshu))]
    public class GetShouquanshuDto : GetListShouquanshuDto
    {
        public GetShouquanshuDto()
        {
        }
    }
}
