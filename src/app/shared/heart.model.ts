export class Heart {

    constructor(public full: boolean,
         public urlHeartFull: string = '../assets/coracao_cheio.png',
         public urlEmptyHeart: string = '../assets/coracao_vazio.png') {}

         public showHeart(): string {
             if(this.full) {
                 return this.urlHeartFull
             } else {
                return this.urlEmptyHeart
             }
         }
}