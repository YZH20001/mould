using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using QC.MF.Shouqunweituoshus2.Dto;

namespace QC.MF.Shouqunweituoshu2.Dto
{
    [AutoMap(typeof(QC.MF.Shouqunweituoshus2.Shouqunweituoshus2))]
    public class GetListShouqunweituoshu2Dto : CreateShouqunweituoshus2Dto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
