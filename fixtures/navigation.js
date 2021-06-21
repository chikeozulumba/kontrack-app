import OverviewIcon from '@/components/icons/OverviewIcon.vue'
import PortfolioIcon from '@/components/icons/PortfolioIcon.vue'
import LoansIcon from '@/components/icons/LoansIcon.vue'
import Settingscon from '@/components/icons/SettingsIcon.vue'
export const navigation = [
  { name: 'Overview', href: '/', icon: OverviewIcon, current: false },
  {
    name: 'Portfolio',
    href: '/portfolio',
    icon: PortfolioIcon,
    current: false,
  },
  { name: 'Loans', href: '/loans', icon: LoansIcon, current: false },
  { name: 'Settings', href: '/settings', icon: Settingscon, current: true },
]
