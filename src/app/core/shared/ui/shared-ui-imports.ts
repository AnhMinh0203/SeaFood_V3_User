import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

export const SHARED_PRIMENG_MODULES = [
  ButtonModule,
  InputTextModule,
  TextareaModule,
  CardModule,
  PanelModule,
  InputGroupModule,
  InputGroupAddonModule,
  InputNumberModule,
  FormsModule,
  ToastModule
] as const;