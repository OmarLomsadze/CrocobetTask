// სტრინგ კონსტანტები არის ცალკე გაწერილი რომ ხელით არ იწეროს 
export class StringConstants {
  public static get USERS_URL(): string { return "https://jsonplaceholder.typicode.com/users"; };
  public static get USER_URL_BY_ID(): string { return "https://jsonplaceholder.typicode.com/users/"; };
  public static get POSTS_URL(): string { return "https://jsonplaceholder.typicode.com/posts?userId="; };
}