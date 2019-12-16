using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using QC.MF.Shenqingshu.Dto;

namespace QC.MF.Shenqingshu.Dto
{
    [AutoMap(typeof(QC.MF.Shenqingshu.Shenqingshu))]
    public class GetListShenqingshuDto : CreateShenqingshuDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
