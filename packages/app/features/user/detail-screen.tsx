import { View, Text } from 'react-native'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { WebView } from 'app/components/WebView'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (

      <WebView source={{ uri: 'https://www.steedos.cn/' }}></WebView>

  )
}
