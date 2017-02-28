export const lengthMixin = {
    computed : {
        wordLengthComputed() {
            return this.word + ' (' + this.word.length + ')';
        },
    },
};