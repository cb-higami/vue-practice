export const tokyoNumber = {
    data() {
        return {
            title : 'welcome to tokyo',
            subTitle : 'tokyo is a greate city',
            number: 0
        }
    },
    filters: {
        lowerCase(value) {
            return value.toLowerCase()
        }
    },
}