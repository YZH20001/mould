using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Xianjinjiaokuandan.Dto
{
    [AutoMap(typeof(QC.MF.Xianjinjiaokuandans.Xianjinjiaokuandan))]
    public class GetXinjinjiaokuandanDto : GetListXinjinjiaokuandanDto
    {
    }
}
