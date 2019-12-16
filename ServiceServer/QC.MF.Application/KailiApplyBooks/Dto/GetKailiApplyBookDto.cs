using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.KailiApplyBooks.Dto
{
    [AutoMap(typeof(KailiApplyBook))]
   public class GetKailiApplyBookDto: GetListKailiApplyBookDto
    {

    }
}
