import type { UserModule } from 'valaxy'
import clarity from '@microsoft/clarity'

export const install: UserModule = ({ isClient }) => {
  if (isClient) {
    // Initialize Microsoft Clarity with your project ID
    // Replace 'YOUR_PROJECT_ID' with your actual Microsoft Clarity project ID
    clarity.init('sa1161jks2')
  }
}
