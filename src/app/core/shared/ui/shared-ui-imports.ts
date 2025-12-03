import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
export const SHARED_PRIMENG_MODULES = [
  ButtonModule,
  InputTextModule,
  TextareaModule,
  CardModule,
  PanelModule,
  InputGroupModule,
  InputGroupAddonModule,
  InputNumberModule
] as const;