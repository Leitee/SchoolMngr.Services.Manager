﻿
namespace SchoolMngr.Services.Model.Entities
{
    using Codeit.NetStdLibrary.Base.DomainModel;
    using System.Collections.Generic;

    public class ClassRoom : EFEntity
    {
        public string Description { get; set; }
        public short MaxCapacity { get; set; }
        public bool? HasNetworkConexion { get; set; }
        public bool? HasScreenProjector { get; set; }

        public virtual ICollection<Class> Classes { get; set; }
    }
}
