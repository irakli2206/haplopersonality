import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Box, Button, Center, Link, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { calculateMultipliers } from './util'


function App() {
  const [count, setCount] = useState(0)

  console.log(calculateMultipliers())

  return (
    <>
      <Center h='100vh' w='full'>
        <Stack gap={20} alignItems={'center'} zIndex={100} position={'relative'}>
          <Text fontSize='4xl'>What haplogroup's personality type do you belong to?</Text>
          <Link as={RouterLink} to='/test?question=1'>
            <Button colorScheme='gray' w='300px' h='50px' >Start Test</Button>
          </Link>
        </Stack>
        {/* <Box w='full' h='full' zIndex={1} position={'absolute'} className='background' /> */}
      </Center>

    </>
  )
}

export default App
