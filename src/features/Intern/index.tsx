import React, {useState} from 'react'
import Input from '../../components/InputForm'
import {Box, TouchRipple} from '@dvh-module/app-component'
import {defaultColors, heightLize} from '../../configs'
import DefaultActionBar from '../../components/DefaultActionBar'
import {Text} from '../../components/text'
import LoginOptionBar from '../homepage/Components/LoginOptionBar'
const DemoAI = () => {
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  const handleMarkCategory = () => {
    
  }
  return (
    <Box color={defaultColors.background} flex={1} paddingHorizontal={heightLize(16)}>
      <DefaultActionBar leftTile="Gán nhãn danh mục" />
      <Input
        value={title}
        title="Tiêu đề bài báo"
        placeholder="title here"
        onChangeText={setTitle}
      />
      <Input
        moreStyle={{textAlignVertical: 'top'}}
        multiLine
        title="Nội dung bài báo"
        placeholder="content here"
        onChangeText={setText}
        value={text}
      />
      <Input
        value={category}
        title="Danh mục bài báo"
        placeholder="category here"
        onChangeText={setCategory}
      />
      <Box justifyContent="space-between" flex={1} paddingBottom={20}>
        <Box justifyContent="space-between" row>
          <Box />
          <TouchRipple>
            <Text color={defaultColors.main_green} size={14} weight="600">
              Danh mục tự động
            </Text>
          </TouchRipple>
        </Box>
        <LoginOptionBar
          title="Tiếp theo"
          colorBackground={defaultColors.main_green}
          titleColor={defaultColors.h_ffffff}
          action={() => {}}
        />
      </Box>
    </Box>
  )
}
export default DemoAI
