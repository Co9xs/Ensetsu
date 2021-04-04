  export const userNameValidation = (value: string): string => {
    if (!value) {
      return 'ユーザー名は必須です'
    }
    if (value.length > 8) {
      return 'ユーザー名は8文字以内にしてください'
    }
    const regex = /^[_0-9a-z]*$/
    if (!regex.test(value)) {
      return 'ユーザー名には半角英小文字, 数字, _ のみ使用できます'
    }
    return ''
  }

  export const displayNameValidation = (value: string): string => {
    if (!value) {
      return '表示名は必須です'
    }
    if (value.length > 8) {
      return '表示名は8文字以内にしてください'
    }
    return ''
  }